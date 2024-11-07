import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
// import { MenuTree } from "./SidebarMenu";

interface IMenuTreeState {
  id: number | string;
  rootId: string;
  expanded: boolean;
  selected: boolean;
  alwayExpand?: boolean;
  child: MenuTreeState[];
}
interface IMenuTreeFullState {
  currentOpen: string;
  data: MenuTreeState[];
  defaultSelectedPath: string;
}

export type MenuTreeState = IMenuTreeState;
export type MenuTreeFullState = IMenuTreeFullState;

const menuState = (
  menuTree: [],
  currentOpenRef: MenuTreeFullState
): MenuTreeState[] => {
  const result: MenuTreeState[] = [];
  menuTree.forEach((val) => {
    const newMenuState: MenuTreeState = {}
    //  {
    //   id: val.id,
    //   rootId: `${val.selfId}`,
    //   expanded: val.expanded ? val.expanded : false,
    //   selected: val.selected ? val.selected : false,
    //   alwayExpand: val.alwayExpand,
    //   child: val.child ? menuState(val.child, currentOpenRef) : [],
    // };
    // if (
    //   val.selected &&
    //   val.selected === true &&
    //   currentOpenRef.currentOpen === ""
    // ) {
    //   currentOpenRef.currentOpen = val.id;
    // } else {
    //   newMenuState.selected = false;
    // }

    result.push(newMenuState);
  });
  return result;
};

/* const initialState = (): MenuTreeFullState => {
  const initialValue: MenuTreeFullState = {
    currentOpen: "",
    data: [],
    defaultSelectedPath: "",
  };
  console.log("SidebarState Init");
  return initialValue;
}; */
const initialState: MenuTreeFullState = {
  currentOpen: "",
  data: [],
  defaultSelectedPath: "",
};

const findMenuTreeItemById = (id: string, state: RootState): MenuTreeState => {
  //Tìm ra Menu Item trong mảng "MenuTreeState" dựa vào "Id Đường Dẫn"
  const idArr = id.split("/");
  let result: MenuTreeState = {
    id: "",
    rootId: "",
    expanded: false,
    selected: false,
    child: [],
  };
  idArr.forEach((val, idx) => {
    if (idx === 0) {
      result = state.sidebar.data.find(
        (e) => e.rootId === val
      ) as MenuTreeState;
    } else {
      result = result.child.find((e) => e.rootId === val) as MenuTreeState;
    }
  });
  return result;
};
export const findExpandedByIdSelector = (id: string) => (state: RootState) =>
  findMenuTreeItemById(id, state)?.expanded || false;
export const findSelectedByIdSelector = (id: string) => (state: RootState) =>
  findMenuTreeItemById(id, state)?.selected || false;

export const getDefaultSelectedPathSelector = (state: RootState) =>
  state.sidebar.defaultSelectedPath;

const collapseAllExcept = (
  data: MenuTreeState[],
  currentOpen: string[],
  payload: string[]
) => {
  data.forEach((val, idx) => {
    if (!currentOpen.includes(val.rootId) && !payload.includes(val.rootId)) {
      if (!data[idx].alwayExpand) {
        data[idx].expanded = false;
      }
      if (data[idx].child.length > 0) {
        collapseAllExcept(data[idx].child, currentOpen, payload);
      }
    }
  });
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    onSetDefaultSelectedPath(state, action: PayloadAction<string>) {
      state.defaultSelectedPath = action.payload;
    },
    onSetStateData(state, action: PayloadAction<MenuTree[]>) {
      const initialValue: MenuTreeFullState = {
        currentOpen: "",
        data: [],
        defaultSelectedPath: "",
      };
      initialValue.data = menuState(action.payload, initialValue);
      state.currentOpen = initialValue.currentOpen;
      state.data = initialValue.data;
    },
    onSubmenuToggled(state, action: PayloadAction<string>) {
      let isAllowCollapse = true; //Cho phép Co Lại Menu Item
      let countCheck = 0;
      const idArr = action.payload.split("/"); //Mảng "Id Đường Dẫn" của Menu Item mới được click vào
      const currentIdArr = state.currentOpen.split("/"); //Mảng "Id Đường Dẫn" của Menu Item đang được chọn
      idArr.forEach((val) => {
        //Nếu toàn bộ Id trong "idArr" có trong mảng "currentIdArr" thì không cho phép Collapse Menu Item mới được click vào
        if (currentIdArr.includes(val)) {
          countCheck++;
        }
        if (countCheck === idArr.length) isAllowCollapse = false;
      });
      collapseAllExcept(state.data, currentIdArr, idArr); //Collapse tất cả Menu Item không thuộc Category với Menu Item mới được click vào
      let result: MenuTreeState;
      idArr.forEach((val, idx) => {
        if (idx === 0) {
          result = state.data.find((e) => e.id === val) as MenuTreeState;
          if (idArr.length === 1 && isAllowCollapse) {
            //Trường hợp Menu Item cấp cao nhất kiểm tra có được Collapse hay không khi click vào
            result.expanded = !result.expanded; //Nếu được Collapse thì chuyển đổi trạng thái giữa Expand và Collapse bình thường
          } else {
            result.expanded = true; //Không được Collapse thì sẽ luôn set "expanded=true"
          }
        } else {
          result = result.child.find((e) => e.rootId === val) as MenuTreeState;
          if (idArr.length > idx + 1) {
            //Tự động Expand những Category cấp trên của Menu Item đang được chọn
            result.expanded = true;
          } else if (isAllowCollapse) {
            //Nếu cho phép Collapse thì Menu Item mới được click(là item cuối trong idArr) có thể toggle giữa Collapse và Expand
            result.expanded = !result.expanded;
          }
        }
      });
    },
    onMenuTreeItemSelected(state, action: PayloadAction<string>) {
      const idArr = action.payload.split("/"); //Khi một Item trên Menu được chọn ta lấy "Id Đường Dẫn" đến Item đó trong Menu
      const currentIdArr = state.currentOpen.split("/"); //"Id Đường Dẫn" của một Item đang được chọn trong Menu
      const remainIdArr: string[] = []; //Chứa Id của Menu Item cần "Co Lại" hoặc "Bỏ Chọn" khi một Menu Item khác được chọn,

      currentIdArr.forEach((val) => {
        if (!idArr.includes(val)) {
          //Lấy ra những Id Item: nếu "Item đang chọn" có "Id Đường Dẫn" không chung Category hoặc không là anh em đồng cấp trong một Category
          remainIdArr.push(val); //Nếu "Item được chọn" đồng cấp hoặc thấp hơn "Item đang chọn" thì "remainIdArr=[Id item đang được chọn]"
        }
      });

      let currentResult: MenuTreeState; //Những Menu Item nằm trong mảng "remainIdArr"
      currentIdArr.forEach((val, idx) => {
        //Nếu mảng "Id Đường Dẫn" của một Item đang được chọn có Id Item thuộc "remainIdArr" thì set Id item đó: expanded=false,selected=false
        if (idx === 0) {
          //Id Item đầu tiên trong "currentIdArr" là Item cấp cao nhất trong MenuTree
          currentResult = state.data.find((e) => e.id === val) as MenuTreeState;
          if (remainIdArr.includes(val) && !currentResult.alwayExpand) {
            currentResult.expanded = false; //Co lại Menu Item trong mảng "remainIdArr"
            currentResult.selected = false; //Bỏ chọn Menu Item trong mảng "remainIdArr"
          }
        } else {
          currentResult = currentResult.child.find(
            (e) => e.rootId === val
          ) as MenuTreeState; //Truy cập vào child Item của Menu Item cha ở bước "Idx=0"
          if (remainIdArr.includes(val) && !currentResult.alwayExpand) {
            currentResult.expanded = false;
            currentResult.selected = false;
          }
        }
      });

      state.currentOpen = action.payload; //Cập nhật lại "Id Đường Dẫn" của Menu Item đang được chọn

      let result: MenuTreeState = {
        id: "",
        rootId: "",
        expanded: false,
        selected: false,
        child: [],
      };
      idArr.forEach((val, idx) => {
        //Dựa vào "Id Đường Dẫn" của Menu Item mới được chọn, tìm đến và set "selected=true" cho Menu Item mới được chọn
        if (idx === 0) {
          result = state.data.find((e) => e.id === val) as MenuTreeState; //result giữ ref của state.data thay đổi trên result sẽ cập nhật state.data
        } else {
          result = result.child.find((e) => e.rootId === val) as MenuTreeState;
        }
      });
      result.selected = true;
    },
  },
});

export const {
  onSetDefaultSelectedPath,
  onSetStateData,
  onSubmenuToggled,
  onMenuTreeItemSelected,
} = sidebarSlice.actions;
export default sidebarSlice;

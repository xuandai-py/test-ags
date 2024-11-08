interface IRootLanguage {
  [key: number]: IRootLangOnPages;
}

export interface IRootLangOnPages {
  HeaderNavBar: {
    title: string;
    url: string;
    submenu?: {
      title: string;
      url: string;
    }[];
  }[];
  NewsType: {
    internal: string;
    public: string;
  };
  CompanyName: string;
  MetaLogo: string;

  ReadMore: string;
  ReadAllService: string;
  ReadAllNews: string;
  ReadMorePartner?: string;
  FooterProfile: {
    companyName: string;
    address: string;
  };
  Page: {
    homePage: {
      banner: {
        heading_1: {
          title: string;
          link: string;
        };
        heading_2: {
          title: string;
          link: string;
        };
        heading_3: {
          title: string;
          link: string;
        };
      };
      about: {
        title: string;
        subtitle: string;
      };
      service: {
        title: string;
        subtitle: string;
      };
      recruitmentBanner: {
        title: string;
        subtitle: string;
        description: string;
        joinUs: string;
      };
      news: {
        title: string;
        subtitle: string;
      };
    };
  };
}

export const rootPresetLanguage: IRootLanguage = {
  1: {
    HeaderNavBar: [
      {
        title: "Trang Chủ",
        url: "/vn",
      },
    ],

    Page: {
      homePage: {
        banner: {
          heading_1: {
            title: "Đối tác dịch vụ mặt đất đáng tin cậy.",
            link: "introduce",
          },
          heading_2: {
            title:
              "Đối tác cho lựa chọn dịch vụ chất lượng, chính xác, an toàn và hiệu quả.",
            link: "introduce",
          },
          heading_3: {
            title: "Khám phá dịch vụ của chúng tôi.",
            link: "service",
          },
        },
        about: {
          title: "Về chúng tôi",
          subtitle: "Cam kết dịch vụ",
        },
        service: {
          title: "Dịch vụ",
          subtitle: "dịch vụ toàn diện",
        },

        recruitmentBanner: {
          title: "Tuyển dụng và đào tạo",
          subtitle: "Phát triển nghề nghiệp tại AGS",
          description:
            "Trở thành thành viên của AGS không chỉ mang đến nhiều chế độ phúc lợi mà còn có cơ hội học hỏi và phát triển bản thân trong ngành hàng không.",
          joinUs: "Tham gia ngay",
        },

        news: {
          title: "tin tức",
          subtitle: "thông tin gần đây",
        },
      },
    },
  },

  2: {
    HeaderNavBar: [
      {
        title: "Home",
        url: "/en",
      },
    ],
    Page: {
      homePage: {
        banner: {
          heading_1: {
            title: "The trusted \n ground handling service provider",
            link: "introduce",
          },
          heading_2: {
            title:
              "Your partner for quality, precision, security and efficiency.",
            link: "introduce",
          },
          heading_3: {
            title: "Exploring our comprehensive services.",
            link: "service",
          },
        },
        about: {
          title: "about us",
          subtitle: "our commitment",
        },
        service: {
          title: "services",
          subtitle: "comprehensive services",
        },

        recruitmentBanner: {
          title: "recruitment & training",
          subtitle: "looking for an opportunity",

          description:
            "Joining AGS not only comes with numerous benefits but also opens up opportunities for learning and personal growth within the aviation industry.",
          joinUs: "Join us now",
        },
        news: {
          title: "news",
          subtitle: "stay up to date",
        },
      },
    },
  },
};

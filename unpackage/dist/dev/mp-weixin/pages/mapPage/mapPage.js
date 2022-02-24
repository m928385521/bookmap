"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      authorize: false,
      imgsrc: "",
      location: {
        latitude: 39.909,
        longitude: 116.39742
      },
      mapMarkers: [
        {
          id: 1,
          latitude: 39.90469,
          longitude: 116.39742,
          iconPath: "/static/logo.png"
        },
        {
          id: 2,
          latitude: 39.90268,
          longitude: 116.39742,
          iconPath: "/static/logo.png"
        },
        {
          id: 3,
          latitude: 39.90067,
          longitude: 116.39742,
          iconPath: "/static/logo.png"
        },
        {
          id: 4,
          latitude: 39.95466,
          longitude: 116.39742,
          iconPath: "/static/logo.png"
        }
      ]
    };
  },
  created() {
  },
  mounted() {
  },
  onShow() {
    if (typeof this.$scope.getTabBar === "function" && this.$scope.getTabBar()) {
      this.$scope.getTabBar().setData({
        selected: 1
      });
    }
  },
  methods: {
    getLocation() {
      let _this = this;
      if (this.authorize) {
        common_vendor.index.getLocation({
          type: "gcj02",
          success(res) {
            console.log(res);
            _this.location.latitude = res.latitude;
            _this.location.longitude = res.longitude;
          },
          fail() {
            console.log("\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u5931\u8D25");
          }
        });
      } else {
        this.getAuthorize();
      }
    },
    getAuthorize() {
      let _this = this;
      common_vendor.index.authorize({
        scope: "scope.userLocation",
        success() {
          console.log("\u6388\u6743\u6210\u529F");
          _this.authorize = true;
          _this.getLocation();
        },
        fail(err) {
          console.log("\u6388\u6743\u5931\u8D25", err);
          _this.authorize = false;
        }
      });
    },
    getUserInfo() {
      let _this = this;
      common_vendor.index.getUserProfile({
        desc: "\u9700\u8981\u4F60\u7684\u4FE1\u606F",
        lang: "zh-CN",
        success(res) {
          console.log("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u6210\u529F", res);
          _this.imgsrc = res.userInfo.avatarUrl;
        },
        fail(err) {
          console.log("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.location.latitude,
    b: $data.location.longitude,
    c: $data.mapMarkers
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);

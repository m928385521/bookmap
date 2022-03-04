Component({
	data: {
		selected: 1,
		color: "rgb(255,255,255)",
		selectedColor: "rgb(255,222,3)",
		list: [{
				"pagePath": "/pages/index/index",
				"iconPath": "../static/tabbaricon/sort_black_24dp.png",
				"text": "探索"
			},
			{
				"pagePath": "/pages/mapPage/mapPage",
				"iconPath": "/static/tabbaricon/map_black_24dp.png",
				"text": "地图"
			},
			{
				"pagePath": "/pages/homePage/homePage",
				"iconPath": "/static/tabbaricon/account_circle_black_24dp.png",
				"text": "我的"
			}
		]
	},
	attached() {},

	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			wx.switchTab({
				url
			})
			this.setData({
				selected: data.index
			})
		}
	}
})

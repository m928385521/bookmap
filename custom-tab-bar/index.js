Component({
	data: {
		selected: 0,
		color: "#7A7E83",
		selectedColor: "#3cc51f",
		list: [{
				"pagePath": "/pages/index/index",
				"text": "探索"
			},
			{
				"pagePath": "/pages/mapPage/mapPage",
				"text": "地图"
			},
			{
				"pagePath": "/pages/homePage/homePage",
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

app.factory('colorChartRef', [function() {
	return {
		green: {
			// 'title': 'How Much Pizza I Ate Last Night',
			'backgroundColor': '#1CB689',
			'chartArea': {
				'width': '90%',
				'height': '90%'
			},
			'pieSliceBorderColor': '#1CB689',
			'legend': 'none',
			'pieHole': 0.4,
			'colors': ['#f2fffb', '#28cc9b']
		},

		// blue color
		blue: {
			// 'title': 'How Much Pizza I Ate Last Night',
			'backgroundColor': '#49B5FA',
			'chartArea': {
				'width': '85%',
				'height': '85%'
			},
			'pieSliceBorderColor': '#49B5FA',
			'legend': 'none',
			'pieHole': 0.4,
			'colors': ['#FFF', '#70C8FF']
		},

		// red color
		red: {
			// 'title': 'How Much Pizza I Ate Last Night',
			'backgroundColor': '#FF4081',
			'chartArea': {
				'width': '85%',
				'height': '85%'
			},
			'pieSliceBorderColor': '#FF4081',
			'legend': 'none',
			'pieHole': 0.4,
			'colors': ['#FFF', '#FF70A1']
		},

		// yellow color
		yellow: {
			// 'title': 'How Much Pizza I Ate Last Night',
			'backgroundColor': '#FFB74D',
			'chartArea': {
				'width': '85%',
				'height': '85%'
			},
			'pieSliceBorderColor': '#FFB74D',
			'legend': 'none',
			'pieHole': 0.4,
			'colors': ['#FFF', '#FFC570']
		}
	};
}]);

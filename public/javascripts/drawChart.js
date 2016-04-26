// method to draw chart


app.factory('charts', ['datastore', 'colorChartRef', function(datastore, colorChartRef) {
	google.charts.load('current', {
		'packages': ['corechart']
	});

	return {
		drawChart: function() {
			google.charts.setOnLoadCallback(function() {


				var water_level = new google.visualization.arrayToDataTable([
					['status', 'percentage'],
					['fill', datastore.water.level],
					['empty', 100 - datastore.water.level]
				]);

				var windows = new google.visualization.arrayToDataTable([
					['status', 'percentage'],
					['closed', datastore.windows.closed],
					['open', datastore.windows.open]
				]);

				var devices = new google.visualization.arrayToDataTable([
					['status', 'percentage'],
					['off', datastore.devices.off],
					['on', datastore.devices.on]
				]);


				// Instantiate and draw our chart, passing in some options.

				var chart3 = new google.visualization.PieChart(document.getElementById('chart_div3'));
				chart3.draw(water_level, colorChartRef.blue);

				var chart4 = new google.visualization.PieChart(document.getElementById('chart_div4'));
				chart4.draw(windows, colorChartRef.red);

				var chart5 = new google.visualization.PieChart(document.getElementById('chart_div5'));
				chart5.draw(devices, colorChartRef.yellow);
			});
		}
	};
}]);

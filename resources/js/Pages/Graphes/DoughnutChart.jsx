import React, { useEffect } from 'react';

const DoughnutChart = ({ data }) => {
    useEffect(() => {
        const renderChartAutre = () => {
            // Transformer les données en dataPoints pour le graphique
            const dataPoints = [
                {
                    name: 'Autre référence', y: 100 - parseFloat(data.pourcentage_cereales_vendues), color: 'transparent'
                },
                {
                    name: 'Cereale',
                    y: parseFloat(data.pourcentage_cereales_vendues), color: 'blue' // Assurez-vous de convertir en nombre
                },
            ];

            const options = {
                animationEnabled: true,
                title: {
                    text: "Céréale "
                },
                data: [
                    {
                        type: 'doughnut',
                        showInLegend: false,
                        yValueFormatString: '#,###\'%\'', // Display percentage for Cereale
                        indexLabelFormatter: function(e) {
                            return e.dataPoint.name === 'Autre référence'
                                ? "" // Hide label for Empty
                                : `${e.dataPoint.name}: ${e.dataPoint.y}%\n`; // Display name and percentage with a newline
                        },
                        dataPoints: dataPoints,
                        indexLabel: "{y}",
                    },
                ],
            };

            const chartContainerAutre = document.getElementById('chartContainerAutre');
            if (chartContainerAutre) {
                const chart = new CanvasJS.Chart(chartContainerAutre, options);
                chart.render();
            }
        };

        renderChartAutre();
    }, [data]); // Re-render the chart when data changes

    return (
        <div id="chartContainerAutre" ></div>
    );
};

export default DoughnutChart;

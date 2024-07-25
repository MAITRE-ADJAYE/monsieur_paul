import React, { useEffect } from 'react';

const Camembert = ({ data }) => {
    useEffect(() => {
        const renderChartCereale = () => {
            // Transformer les données en dataPoints pour le graphique
            const Laits = data.map(item => ({
                label: "Laits",
                y: parseInt(item.Laits),
            }));

            const Cereale = data.map(item => ({
                label: "Céréale",
                y: parseInt(item.Cereale),
            }));

            const dataPoints = Laits.concat(Cereale);

            const options = {
                theme: "dark2",
                animationEnabled: true,
                exportFileName: "New Year Resolutions",
                exportEnabled: true,
                title: {
                    text: ""
                },
                data: [{
                    type: "pie",
                    showInLegend: true,
                    legendText: "{label}",
                    toolTipContent: "{label}: <strong>{y}%</strong>",
                    indexLabel: "{y}%",
                    indexLabelPlacement: "inside",
                    dataPoints: dataPoints
                }]
            };

            const chartContainerCereale = document.getElementById('chartContainerCereale');
            if (chartContainerCereale) {
                const chart = new CanvasJS.Chart(chartContainerCereale, options);
                chart.render();
            }
        };

        renderChartCereale();
    }, [data]); // Re-render the chart when data changes

    return (
        <div id="chartContainerCereale"></div>
    );
};

export default Camembert;

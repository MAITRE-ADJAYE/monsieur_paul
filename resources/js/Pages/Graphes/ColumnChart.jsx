import React, { useEffect } from "react";

const ChartLabel = ({ data }) => {
    useEffect(() => {
        const renderChartCommerciaux = () => {
            // Trier les données par ordre décroissant du total des ventes
            const sortedData = data.sort((a, b) => b.total_quantite - a.total_quantite);

            // Transformer les données triées en dataPoints pour le graphique
            const dataPoints = sortedData.map(item => ({
                label: item.user_name,
                y: parseFloat(item.total_quantite),
                indexLabel: "{y}"
            }));

            const options = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", //"light1", "dark1", "dark2"
                title:{
                    text: "Classement des Commerciaux"
                },
                data: [{
                    type: "column", //change type to bar, line, area, pie, etc
                    dataPoints: dataPoints,
                }]
            };

            const chartContainerCommerciaux = document.getElementById('chartContainerCommerciaux');
            if (chartContainerCommerciaux) {
                const chart = new CanvasJS.Chart(chartContainerCommerciaux, options);
                chart.render();
            }
        };

        renderChartCommerciaux();
    }, [data]); // Re-render the chart when data changes

    return (
        <div id="chartContainerCommerciaux" className="ChartWithIndexLabel" style={{ height: 400 }}></div>
    );
};

export default ChartLabel;

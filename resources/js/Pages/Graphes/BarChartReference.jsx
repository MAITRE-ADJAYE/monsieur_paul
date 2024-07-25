import React, { useEffect } from 'react';

const BarChartReference = ({ data }) => {
    useEffect(() => {
        const renderChartReference = () => {
            // Trier les données par ordre décroissant du total des quantités
            const sortedData = data.sort((a, b) => b.total_quantite - a.total_quantite);

            // Transformer les données triées en dataPoints pour le graphique
            const dataPoints = sortedData.map(item => ({
                label: item.reference_produit,
                y: parseFloat(item.total_quantite)
            }));

            const options = {
                exportEnabled: true,
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Top Référence"
                },
                axisX: {
                    title: "Références",
                    reversed: true,
                    labelFontFamily: "Arial", // Police des labels de l'axe X
                    labelFontSize: 7.5,
                    interval: 1, // Forcer l'affichage de chaque label
                },
                axisY: {
                    title: "Quantités",
                    labelFormatter: function () { return ""; }, // Masquer les valeurs sur l'axe Y
                    gridThickness: 0 // Enlever les lignes de repère sur l'axe Y
                },
                data: [{
                    type: "bar",
                    indexLabel: "{y}",
                    dataPoints: dataPoints,
                }]
            };

            const chartContainerReference = document.getElementById('chartContainerReference');
            if (chartContainerReference) {
                const chart = new CanvasJS.Chart(chartContainerReference, options);
                chart.render();
            }
        };

        renderChartReference();
    }, [data]); // Re-render the chart when data changes

    return (
        <div id="chartContainerReference"></div>
    );
};

export default BarChartReference;

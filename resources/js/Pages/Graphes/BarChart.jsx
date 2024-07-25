import React, { useEffect } from 'react';

const BarChart = ({ data }) => {
    useEffect(() => {
        const renderChart = () => {
            // Trier les données par ordre décroissant du total des ventes
            const sortedData = data.sort((a, b) => b.total_vente - a.total_vente);

            // Transformer les données triées en dataPoints pour le graphique
            const dataPoints = sortedData.map(item => ({
                label: item.user_name,
                y: parseFloat(item.total_vente)
            }));

            const options = {
                exportEnabled: true,
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Total des ventes par commercial"
                },
                axisX: {
                    title: "Commerciaux",
                    reversed: true,
                },
                axisY: {
                    title: "Total des ventes",
                    labelFormatter: function (e) {
                        return e.value.toLocaleString() + " FCFA";
                    }
                },
                data: [{
                    type: "bar", // Utiliser le type "column" pour un graphique en colonnes
                    indexLabel: "{y}",
                    dataPoints: dataPoints,
                }]
            };

            const chart = new CanvasJS.Chart('chartContainer', options);
            chart.render();
        };

        renderChart();
    }, [data]); // Déclencher à nouveau le rendu lorsque les données changent

    return (
        <div id="chartContainer" ></div>
    );
};

export default BarChart;

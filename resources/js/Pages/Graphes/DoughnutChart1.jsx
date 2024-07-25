import React, { useEffect } from 'react';

const DoughnutChart1 = ({ data }) => {
    useEffect(() => {
        const renderChartLaitInfantile = () => {
            // Transformer les données en dataPoints pour le graphique
            const dataPoints = [
                {
                    name: 'Autre référence', y: 100 - parseFloat(data.pourcentage_Lait_infantile), color: 'transparent'
                },
                {
                    name: 'Lait Infantile',
                    y: parseFloat(data.pourcentage_Lait_infantile), color: 'blue' // Assurez-vous de convertir en nombre
                },
            ];

            const options = {
                animationEnabled: true,
                title: {
                    text: "Lait Infantile "
                },
                data: [
                    {
                        type: 'doughnut',
                        showInLegend: false,
                        yValueFormatString: '#,###\'%\'', // Afficher le pourcentage pour Lait Infantile
                        indexLabelFormatter: function(e) {
                            return e.dataPoint.name === 'Autre référence'
                                ? "" // Masquer l'étiquette pour 'Autre référence'
                                : `${e.dataPoint.name}: ${e.dataPoint.y}%\n`; // Afficher le nom et le pourcentage avec un retour à la ligne
                        },
                        dataPoints: dataPoints,
                        indexLabel: "{y}",
                    },
                ],
            };

            const chartContainerLaitInfantile = document.getElementById('chartContainerLaitInfantile');
            if (chartContainerLaitInfantile) {
                const chart = new CanvasJS.Chart(chartContainerLaitInfantile, options);
                chart.render();
            }
        };

        renderChartLaitInfantile();
    }, [data]); // Re-render le graphique lorsque les données changent

    return (
        <div id="chartContainerLaitInfantile" ></div>
    );
};

export default DoughnutChart1;

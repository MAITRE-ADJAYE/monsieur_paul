import React, { useEffect } from 'react';

const DoughnutChart2 = ({ data }) => {
    useEffect(() => {
        const renderChartLaitCroissance = () => {
            // Transformer les données en dataPoints pour le graphique
            const dataPoints = [
                {
                    name: 'Autre référence', y: 100 - parseFloat(data.pourcentage_Lait_de_croissance), color: 'transparent'
                },
                {
                    name: 'Lait de croissance',
                    y: parseFloat(data.pourcentage_Lait_de_croissance), color: 'blue' // Assurez-vous de convertir en nombre
                },
            ];

            const options = {
                animationEnabled: true,
                title: {
                    text: "Lait de Croissance"
                },
                data: [
                    {
                        type: 'doughnut',
                        showInLegend: false,
                        yValueFormatString: '#,###\'%\'', // Afficher le pourcentage pour Lait de croissance
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

            const chartContainerLaitCroissance = document.getElementById('chartContainerLaitCroissance');
            if (chartContainerLaitCroissance) {
                const chart = new CanvasJS.Chart(chartContainerLaitCroissance, options);
                chart.render();
            }
        };

        renderChartLaitCroissance();
    }, [data]); // Re-render le graphique lorsque les données changent

    return (
        <div id="chartContainerLaitCroissance" style={{ height: 400 }}></div>
    );
};

export default DoughnutChart2;

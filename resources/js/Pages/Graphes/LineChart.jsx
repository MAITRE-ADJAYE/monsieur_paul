import React, { useEffect } from 'react';

const LineChart = ({ data }) => {
    useEffect(() => {
        const renderChartChiffreAffaire = () => {
            // Transformer les données en dataPoints pour le graphique
            const dataPoints = data
            .filter(item => parseInt(item.total_vente) > 0) // Filtrer pour n'inclure que les jours avec des ventes
            .map(item => {
                // Extraire le jour de la date (en supposant que la date soit au format YYYY-MM-DD)
                const date = new Date(item.date);
                const day = date.getDate(); // Obtenir le jour du mois
                return {
                    label: day.toString(), // Utiliser le jour comme étiquette
                    y: parseInt(item.total_vente)
                };
            });

            const options = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", // "light1", "dark1", "dark2"
                title: {
                    text: "Chiffre d'Affaire"
                },
                axisY: {
                    includeZero: true,
                    suffix: "FCFA",
                },
                axisX: {
                    title: "Date",
                    valueFormatString: "DD",  // Format d'affichage des dates
                    interval: 1,
                    intervalType: "day", // Assurez-vous que le type d'intervalle est défini sur day pour éviter les dates répétées

                },
                data: [{
                    type: "line",
                    toolTipContent: "Date: {x}<br/>Total Vente: {y}",
                    indexLabel: "{y}",
                    dataPoints: dataPoints
                }]
            };

            const chartContainerChiffreAffaire = document.getElementById('chartContainerChiffreAffaire');
            if (chartContainerChiffreAffaire) {
                const chart = new window.CanvasJS.Chart(chartContainerChiffreAffaire, options); // Utilisation de window.CanvasJS.Chart pour accéder à CanvasJS via les CDN
                chart.render();
            }
        };

        renderChartChiffreAffaire();
    }, [data]); // Re-render le graphique lorsque les données changent

    return (
        <div id="chartContainerChiffreAffaire" style={{ height: 400, width: "100%" }}></div>
    );
};

export default LineChart;

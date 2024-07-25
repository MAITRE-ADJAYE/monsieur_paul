import React, { useEffect } from 'react';

import '../../../css/histogramme.css'; // Assurez-vous d'inclure le fichier CSS

const Histogramme = ({ data }) => {
    useEffect(() => {
        const renderChartVente = () => {
            // Transformer les données en dataPoints pour le graphique
            const dataPoints = data.map(item => {
                // Extraire le jour de la date (en supposant que la date soit au format YYYY-MM-DD)
                const date = new Date(item.date);
                const day = date.getDate(); // Obtenir le jour du mois
                return {
                    label: day.toString(), // Utiliser le jour comme étiquette
                    y: parseInt(item.total_quantite, 10)
                };
            });

            const options = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2",
                title: {
                    text: "Vente en carton"
                },
                axisX: {
                    interval: 1, // Forcer l'affichage de chaque label
                },
                data: [
                    {
                        type: "column",
                        dataPoints: dataPoints,
                        indexLabel: "{y}",
                    }
                ]
            };

            const chartContainerVente = document.getElementById('chartContainerVente');
            if (chartContainerVente) {
                const chart = new CanvasJS.Chart(chartContainerVente, options);
                chart.render();
            }
        };

        renderChartVente();
    }, [data]); // Re-render le graphique lorsque les données changent

    return (
        <div id="chartContainerVente" ></div>
    );
};

export default Histogramme;

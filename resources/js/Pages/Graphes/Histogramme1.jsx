import React, { useEffect } from 'react';
import '../../../css/histogramme.css'; // Assurez-vous d'inclure le fichier CSS

const Histogramme1 = ({ data }) => {
    useEffect(() => {
        const renderChartCarton = () => {
            // Transformer les données en dataPoints pour le graphique
            const dataPoints = data.map(item => ({
                label: `${String(item.mois).padStart(2, '0')}`, // Format YYYY-MM
                y: parseInt(item.quantite_totale, 10)
            }));

            const options = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2",
                title: {
                    text: "Carton vendu par mois"
                },
                axisX: {

                    interval: 1,

                },
                data: [
                    {
                        type: "column",
                        dataPoints: dataPoints,
                        indexLabel: "{y}",
                    }
                ]
            };

            const chartContainerCarton = document.getElementById('chartContainerCarton');
            if (chartContainerCarton) {
                const chart = new window.CanvasJS.Chart(chartContainerCarton, options); // Utilisation de window.CanvasJS.Chart pour accéder à CanvasJS via les CDN
                chart.render();
            }
        };

        renderChartCarton();
    }, [data]); // Re-render le graphique lorsque les données changent

    return (
        <div id="chartContainerCarton" style={{ height: 400 }}></div>
    );
};

export default Histogramme1;

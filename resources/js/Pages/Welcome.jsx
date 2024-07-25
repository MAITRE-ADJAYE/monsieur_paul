import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
   

    const year = 2024;
    const month = 5;

    return (
        <>
            <Head title="Bienvenue" />
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center" style={{ background: "linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)", color: "#fff" }}>
                <div className="container">
                    
                    <div className="d-flex justify-content-center mb-4">
                        <ApplicationLogo />
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="mb-4">
                                <i className="fas fa-chart-line"></i> Bienvenue sur France Lait Gabon
                            </h1>
                            <p className="lead mb-4" style={{ lineHeight: '1.6' }}>
                                Optimisez votre gestion des ventes et des stocks avec France Lait Gabon !!! <br />
                                votre outil ultime pour des statistiques claires et détaillées. <br />
                                <strong>Développé par les développeurs du FABLAB Moanda.</strong>
                            </p>
                        </div>
                    </div>
                    <nav>
                        {auth.user ? (
                            <Link
                                href={route('dashboard', { year: year, month: month })}
                                className="btn btn-primary btn-lg mx-2"
                            >
                                <i className="fas fa-tachometer-alt"></i> Tableau de Bord
                            </Link>
                        ) : (
                            <Link
                                href={route('login')}
                                className="btn btn-secondary btn-lg mx-2"
                            >
                                <i className="fas fa-sign-in-alt"></i> Connexion
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
}

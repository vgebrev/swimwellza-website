import Link from 'next/link';

export default function Contact() {
    return (
        <section className="bg-swimwell-light py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="mb-8 text-3xl font-bold text-swimwell-dark md:text-4xl">
                    Get in Touch
                </h2>
                <p className="mb-10 text-lg text-swimwell-dark/80 max-w-2xl mx-auto">
                    Ready to start your swimming journey? Contact us today to schedule your first lesson or ask any questions.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <Link
                        href="https://wa.me/27844081001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center rounded-xl bg-white px-6 py-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg border border-swimwell-aqua/20"
                    >
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.218-.421-.134-.495.062-.054.162-.171.286-.3.124-.124.173-.198.248-.347.074-.149.049-.272-.025-.421-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-semibold uppercase tracking-wider text-swimwell-dark/50">WhatsApp</p>
                            <p className="text-lg font-bold text-swimwell-dark">084 408 1001</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

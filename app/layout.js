import './globals.scss'

export const metadata = {
    title: 'The Quantum Garden - Interactive 3D Quantum Computing Visualization',
    description: 'Explore the fascinating world of quantum computing through "The Quantum Garden" – an immersive 3D web experience that illustrates quantum concepts like superposition and entanglement using geometric forms. Built with React Three Fiber and Next.js, this project blends cutting-edge web technology with educational content to demystify quantum computing in an engaging and interactive way.',
    keywords: 'quantum computing, 3D visualization, React Three Fiber, Next.js, interactive web experience, educational tool, quantum mechanics, WebGL, superposition, entanglement',
    author: 'Bespoke Programming',
    projectGithubRepo: 'https://github.com/piotr-bania/the_quantum_garden',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

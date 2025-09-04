import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow bg-white sticky top-0">
        <h1 className="text-2xl font-bold">Liam Guetg</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I’m a Computer Science student at UBC with a background in Biochemistry.
          I love building software that solves problems — from data-driven research tools
          to interactive web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Treasure Hunt! RPG</h3>
              <p className="text-gray-700 mb-4">
                Java-based GUI RPG with JSON persistence and JUnit testing.
              </p>
              <a
                href="https://github.com/yourusername/treasure-hunt"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Near Earth Object Classifier</h3>
              <p className="text-gray-700 mb-4">
                Built with R & KNN, classifying hazardous objects with 88% accuracy.
              </p>
              <a
                href="https://github.com/yourusername/neo-classifier"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Conway’s Game of Life</h3>
              <p className="text-gray-700 mb-4">
                Python console-based version with OOP design and user interactivity.
              </p>
              <a
                href="https://github.com/yourusername/conways-game"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Feel free to reach out via email or LinkedIn!</p>
        <div className="space-x-6">
          <a href="mailto:liam@example.com" className="text-blue-600 hover:underline">
            Email
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

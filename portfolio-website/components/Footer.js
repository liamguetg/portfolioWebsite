export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 text-blue-100">Feel free to reach out via email or LinkedIn!</p>

          <div className="flex justify-center items-center mb-12 gap-10">
            <a href="mailto:guetgliam@gmail.com" className="text-white hover:text-blue-200 transition-colors duration-200">
              📧 Email
            </a>
            <a
              href="https://www.linkedin.com/in/liam-guetg-a034a1229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/liamguetg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              🐙 GitHub
            </a>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-200">© 2024 Liam Guetg. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

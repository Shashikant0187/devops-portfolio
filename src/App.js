function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Shashikant</h1>
        <ul className="flex gap-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Projects</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="flex flex-col justify-center items-center text-center h-[70vh]">
        <h1 className="text-5xl font-bold">
          Hi, I'm Shashikant 👋
        </h1>
        <p className="text-xl mt-4 text-gray-400">
          DevOps Engineer | Docker | Kubernetes | CI/CD
        </p>
      </div>

      {/* Projects Section */}
      <div className="px-10 py-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
          <h3 className="text-2xl font-semibold">
            DevOps CI/CD Pipeline with Kubernetes
          </h3>

          <p className="text-gray-400 mt-2">
            Built a complete CI/CD pipeline using GitHub Actions. 
            Containerized applications using Docker and deployed on Kubernetes cluster with Ingress routing.
          </p>

          <ul className="mt-4 text-gray-300 list-disc list-inside">
            <li>CI/CD using GitHub Actions</li>
            <li>Docker image build & push</li>
            <li>Kubernetes deployment with Ingress</li>
            <li>Monitoring using Prometheus & Grafana</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;

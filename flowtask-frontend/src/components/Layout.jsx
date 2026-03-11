export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">

        <div className="flex items-center gap-3">
          <div className="bg-emerald-500 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            ✓
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">FlowTask</h1>
            <p className="text-sm text-gray-500">
              Gestor de tareas con Spring Boot
            </p>
          </div>
        </div>

      </header>

      {/* Contenido */}
      <main className="max-w-5xl mx-auto p-6">
        {children}
      </main>

    </div>
  );
}
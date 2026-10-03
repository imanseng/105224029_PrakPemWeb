export default function LatihanAudit() {
  return (
    <main className="p-8">
      {/* 1. Mengubah <div> menjadi <h1> untuk hierarki judul & landmark */}
      <h1 className="text-2xl font-bold">Katalog Alat Laboratorium</h1>

      {/* 2. Menambahkan atribut alt pada elemen image */}
      <img src="/next.svg" alt="Logo Next.js" width={120} height={24} />

      {/* 3. Mengganti text-gray-300 menjadi text-white-700 agar memenuhi rasio kontras 4,5:1 */}
      <p className="text-white-700">Stok diperbarui setiap hari.</p>

      <div className="mt-4 flex items-center">
        {/* 4. Menambahkan label terhubung untuk elemen input */}
        <label htmlFor="cari-alat" className="sr-only">
          Cari Alat
        </label>
        <input
          id="cari-alat"
          type="search"
          placeholder="Cari alat..."
          className="rounded border p-2"
        />

        {/* 5. Menambahkan aria-label pada button dan aria-hidden pada SVG */}
        <button
          aria-label="Cari"
          className="ml-2 rounded border p-2 hover:bg-gray-100"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <circle
              cx="7"
              cy="7"
              r="5"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
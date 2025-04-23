"use client"

// import Link from "next/link" - tidak digunakan lagi
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import SphereGrid from "@/components/sphere-grid"
import { spheres } from "@/lib/data"

export default function HomePage() {
  const router = useRouter()

  // Fungsi untuk menghapus data quiz sebelumnya dari localStorage
  const clearQuizData = () => {
    // Hapus semua item localStorage yang terkait dengan quiz
    const keysToRemove = []

    // Cari semua kunci yang terkait dengan quiz
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (
        key.startsWith('quiz_') ||
        key.startsWith('preferences_')
      )) {
        keysToRemove.push(key)
      }
    }

    // Hapus semua kunci yang ditemukan
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
    })

    // Navigasi ke halaman quiz
    router.push('/quiz')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Temukan Skill Tersembunyi Anda
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Jawab beberapa pertanyaan dan temukan bakat alami yang mungkin belum Anda sadari
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg"
            onClick={clearQuizData}
          >
            Mulai Petualangan Skill
          </Button>
        </header>

        <section className="mb-16 py-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">7 Sphere Kemampuan</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Skill Anda akan dipetakan ke dalam tujuh kategori utama:
            </p>
          </div>
          <SphereGrid spheres={spheres} />
        </section>

        <section className="mb-16 py-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">Bagaimana Ini Bekerja?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Jawab Pertanyaan</h3>
              <p className="text-muted-foreground">
                Selesaikan kuis adaptif dengan 10-15 pertanyaan yang dipilih khusus untuk Anda
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Analisis AI</h3>
              <p className="text-muted-foreground">
                Algoritma kami menganalisis pola jawaban untuk mengidentifikasi skill Anda
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Temukan Skill</h3>
              <p className="text-muted-foreground">
                Dapatkan laporan tentang skill tersembunyi dan bagaimana mengembangkannya
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Siap Menemukan Skill Tersembunyi Anda?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Hanya butuh 5-10 menit untuk menyelesaikan kuis dan mendapatkan insight tentang kemampuan Anda
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg"
              onClick={clearQuizData}
            >
              Mulai Sekarang
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

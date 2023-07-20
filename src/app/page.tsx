import { MainPageCarousel } from '@/components/app';

export default function Home() {
  return (
    <main>
      <MainPageCarousel />
      <div className="flex flex-col gap-12 mt-12">
        <div className="container flex flex-col gap-8">
          <h2>Категории</h2>
          <div className="grid grid-cols-[2fr_1fr] gap-4">
            <div>
              <img
                src="/assets/images/1.jpg"
                width="100%"
                height="auto"
                className="max-h-[400px] object-cover"
              />
              <h3>Одежда</h3>
              <p>
                Комфортная база на каждый день плюс акцентные вещи из наших лимитированных коллекций
              </p>
            </div>
            <div>
              <img src="/assets/images/2.jpg" width="100%" height="auto" />
              <h3>АКСЕССУАРЫ</h3>
              <p>Функциональные мелочи, которые дополняют стиль и помогают вам выразиться</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-8">
          <div className="container flex flex-col gap-8">
            <h2>Раскупают</h2>
            <div className="grid grid-cols-3 gap-8">
              <img
                src="/assets/images/3.jpg"
                width="100%"
                height="auto"
                className="max-h-[400px] object-cover"
              />
              <img
                src="/assets/images/2.jpg"
                width="100%"
                height="auto"
                className="max-h-[400px] object-cover"
              />
              <img
                src="/assets/images/1.jpg"
                width="100%"
                height="auto"
                className="max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

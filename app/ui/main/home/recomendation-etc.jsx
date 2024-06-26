import BigCard from "./big-card";

export default function RecomendationEtc() {
  return (
    <>
      <div class="mb-4 ml-5 flex flex-col">
        <div class="no-scrollbar flex overflow-x-scroll">
          <div class="flex flex-nowrap">
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Recomended
            </button>
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Popular
            </button>
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Trending
            </button>
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Favorites
            </button>
            <button className="m-1 mr-5 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Best Sellers
            </button>
          </div>
        </div>
      </div>
      <div class="ml-3 flex flex-col">
        <div class="no-scrollbar flex overflow-x-scroll">
          <div class="flex flex-nowrap">
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </>
  );
}

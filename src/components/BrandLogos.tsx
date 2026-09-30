import {
  siDell,
  siHp,
  siLenovo,
  siAsus,
  siAcer,
  siMsi,
  siToshiba,
  siSony,
  siIntel,
  siAmd,
} from 'simple-icons';

type Brand = {
  name: string;
  slug?: string;
  hex: string;
  path?: string;
};

const brands: Brand[] = [
  { name: 'Dell', slug: 'dell', hex: siDell.hex, path: siDell.path },
  { name: 'HP', slug: 'hp', hex: siHp.hex, path: siHp.path },
  { name: 'Lenovo', slug: 'lenovo', hex: siLenovo.hex, path: siLenovo.path },
  { name: 'ASUS', slug: 'asus', hex: siAsus.hex, path: siAsus.path },
  { name: 'Acer', slug: 'acer', hex: siAcer.hex, path: siAcer.path },
  { name: 'MSI', slug: 'msi', hex: siMsi.hex, path: siMsi.path },
  { name: 'Prama', hex: 'C8102E' },
  { name: 'CP Plus', hex: '005BAC' },
  { name: 'Toshiba', slug: 'toshiba', hex: siToshiba.hex, path: siToshiba.path },
  { name: 'Sony', slug: 'sony', hex: '000000', path: siSony.path },
  { name: 'Intel', slug: 'intel', hex: siIntel.hex, path: siIntel.path },
  { name: 'AMD', slug: 'amd', hex: siAmd.hex, path: siAmd.path },
  { name: 'Hikvision', hex: 'E60012' },
  { name: 'D-Link', hex: '00A0DF' },
];

export default function BrandLogos() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow min-h-[80px]"
        >
          {brand.path ? (
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-auto"
              fill={`#${brand.hex}`}
            >
              <path d={brand.path} />
            </svg>
          ) : (
            <span
              className="font-bold text-sm px-3 py-1.5 rounded text-white"
              style={{ backgroundColor: `#${brand.hex}` }}
            >
              {brand.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

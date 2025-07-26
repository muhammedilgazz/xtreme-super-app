import React, { useState, useMemo, useRef, useEffect, DragEvent } from 'react';
import { FiFileText, FiHome, FiDollarSign, FiTarget, FiSettings, FiPlusCircle, FiFilter, FiMoreVertical, FiBell, FiLifeBuoy, FiBookOpen, FiPenTool, FiCalendar, FiFilm, FiShoppingBag, FiX, FiHeart, FiSearch, FiTag, FiShoppingCart, FiStar, FiClock, FiList, FiPlus, FiEdit3 } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Urun {
  id: number;
  isim: string;
  fiyat: number;
  kategori: string;
  etiketler: string[];
  resimler: string[];
  aciklama: string;
  siteAdi: string;
  satinAlmaLinki: string;
  tercihEdilen?: boolean;
  zamanPlanlamasi?: 'bu-ay' | 'bu-yil' | 'alınacaklar' | 'ihtiyaç';
  sepetler?: string[];
}

interface Sepet {
  id: string;
  isim: string;
  urunler: number[];
  olusturmaTarihi: Date;
}

interface KartProps {
  baslik: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

interface ButonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'warning';
  icon?: IconType;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  baslik: string;
  children: React.ReactNode;
}

interface UrunKartiProps {
  urun: Urun;
  onDetailsClick: (urun: Urun) => void;
  onTercihToggle: (urunId: number) => void;
  onZamanPlanlamasiChange: (urunId: number, plan: Urun['zamanPlanlamasi']) => void;
  onSepeteEkle: (urunId: number, sepetId?: string) => void;
  sepetler: Sepet[];
  onCreateSepet: (isim: string) => void;
}

interface UrunDetayModalProps {
  isOpen: boolean;
  onClose: () => void;
  urun: Urun | null;
  onTercihToggle: (urunId: number) => void;
  onZamanPlanlamasiChange: (urunId: number, plan: Urun['zamanPlanlamasi']) => void;
  onSepeteEkle: (urunId: number, sepetId?: string) => void;
  sepetler: Sepet[];
  onCreateSepet: (isim: string) => void;
}

interface SepetOlusturModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateSepet: (isim: string) => void;
}

interface UrunFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (urun: Partial<Urun>) => void;
  initialData?: Partial<Urun>;
  kategoriler: string[];
}

interface SayfalamaProps {
  toplamUrun: number;
  sayfaBasina: number;
  mevcutSayfa: number;
  onSayfaDegis: (sayfa: number) => void;
}

const renkler = {
  kartBaslik: '#e9ecef',
  buton: '#112e4b',
  logoBaslik: '#6c8db1',
  anaYazi: '#212529',
  acikYazi: '#7b8ab8',
  transparanYazi: '#212529bf',
  uyari: '#ffc107',
  arkaplan: '#f8f9fa',
};

const ornekUrunler: Urun[] = [
  {
    id: 1,
    isim: 'Logitech MX Master 3S',
    fiyat: 2999,
    kategori: 'Elektronik',
    etiketler: ['fare', 'ofis', 'kablosuz'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=MX+Master+3S',
      'https://placehold.co/600x400/e9ecef/212529?text=MX+Master+3S+2',
      'https://placehold.co/600x400/e9ecef/212529?text=MX+Master+3S+3'
    ],
    aciklama: 'Gelişmiş kablosuz performans ve ergonomi sunan profesyonel fare.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/logitech-mx-master-3s',
    tercihEdilen: true,
    zamanPlanlamasi: 'bu-ay',
    sepetler: ['Toplama PC']
  },
  {
    id: 2,
    isim: 'Sony WH-1000XM5 Kulaklık',
    fiyat: 8500,
    kategori: 'Elektronik',
    etiketler: ['kulaklık', 'müzik', 'gürültü engelleme'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=Sony+XM5',
      'https://placehold.co/600x400/e9ecef/212529?text=Sony+XM5+2'
    ],
    aciklama: 'Sektör lideri gürültü engelleme özelliğine sahip yüksek kaliteli kablosuz kulaklık.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/sony-wh-1000xm5',
    tercihEdilen: false,
    zamanPlanlamasi: 'bu-yil',
    sepetler: []
  },
  {
    id: 3,
    isim: 'Nespresso Lattissima One',
    fiyat: 6200,
    kategori: 'Mutfak',
    etiketler: ['kahve', 'kapsül', 'makine'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=Nespresso',
      'https://placehold.co/600x400/e9ecef/212529?text=Nespresso+2'
    ],
    aciklama: 'Tek tuşla taze süt köpüklü kahveler hazırlayan kompakt ve şık kahve makinesi.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/nespresso-lattissima-one',
    tercihEdilen: true,
    zamanPlanlamasi: 'alınacaklar',
    sepetler: ['Bu Ayki Sepetim']
  },
  {
    id: 4,
    isim: 'Apple MacBook Air M2',
    fiyat: 38000,
    kategori: 'Elektronik',
    etiketler: ['laptop', 'apple', 'taşınabilir'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=MacBook+Air',
      'https://placehold.co/600x400/e9ecef/212529?text=MacBook+Air+2',
      'https://placehold.co/600x400/e9ecef/212529?text=MacBook+Air+3'
    ],
    aciklama: 'İnanılmaz ince ve hafif tasarımda güçlü M2 çip ile üstün performans.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/apple-macbook-air-m2',
    tercihEdilen: false,
    zamanPlanlamasi: 'ihtiyaç',
    sepetler: []
  },
  {
    id: 5,
    isim: 'Samsung Odyssey G9 Monitör',
    fiyat: 35000,
    kategori: 'Elektronik',
    etiketler: ['monitör', 'oyuncu', 'geniş ekran'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=Odyssey+G9',
      'https://placehold.co/600x400/e9ecef/212529?text=Odyssey+G9+2'
    ],
    aciklama: 'Sürükleyici bir oyun deneyimi için 49 inç kavisli QLED oyun monitörü.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/samsung-odyssey-g9',
    tercihEdilen: true,
    zamanPlanlamasi: 'bu-yil',
    sepetler: ['Toplama PC']
  },
  {
    id: 6,
    isim: 'Anker PowerCore 20000',
    fiyat: 1500,
    kategori: 'Aksesuar',
    etiketler: ['powerbank', 'mobil', 'şarj'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=Anker'
    ],
    aciklama: 'Yüksek kapasiteli ve hızlı şarj özellikli taşınabilir şarj cihazı.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/anker-powercore-20000',
    tercihEdilen: false,
    zamanPlanlamasi: 'alınacaklar',
    sepetler: []
  },
  {
    id: 7,
    isim: 'Stanley Termos 1L',
    fiyat: 1800,
    kategori: 'Outdoor',
    etiketler: ['termos', 'kamp', 'içecek'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=Stanley'
    ],
    aciklama: 'İçecekleri saatlerce sıcak veya soğuk tutan ikonik ve dayanıklı termos.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/stanley-termos-1l',
    tercihEdilen: false,
    zamanPlanlamasi: 'ihtiyaç',
    sepetler: []
  },
  {
    id: 8,
    isim: 'Xiaomi Mi Robot Vacuum',
    fiyat: 9000,
    kategori: 'Ev Aletleri',
    etiketler: ['robot süpürge', 'temizlik', 'akıllı ev'],
    resimler: [
      'https://placehold.co/600x400/e9ecef/212529?text=Robot+Süpürge',
      'https://placehold.co/600x400/e9ecef/212529?text=Robot+Süpürge+2'
    ],
    aciklama: 'Akıllı haritalama ve otomatik şarj özellikli robot süpürge ve paspas.',
    siteAdi: 'Amazon',
    satinAlmaLinki: 'https://amazon.com.tr/xiaomi-mi-robot-vacuum',
    tercihEdilen: true,
    zamanPlanlamasi: 'bu-ay',
    sepetler: ['Bu Ayki Sepetim']
  }
];

const Kart: React.FC<KartProps> = ({ baslik, children, className = '', headerAction }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    <div className="p-4 flex justify-between items-center" style={{ backgroundColor: renkler.kartBaslik, borderBottom: '1px solid #dee2e6' }}>
      <h3 className="font-bold text-lg" style={{ color: renkler.anaYazi }}>{baslik}</h3>
      {headerAction}
    </div>
    <div className="p-4 md:p-6">{children}</div>
  </div>
);

const Buton: React.FC<ButonProps> = ({ children, onClick, variant = 'primary', icon: Icon, className = '', type = 'button', disabled = false }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold flex items-center justify-center transition-transform transform hover:scale-105 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed';
  const styles: Record<string, string> = {
    primary: `bg-[${renkler.buton}] text-white`,
    secondary: `bg-gray-200 text-[${renkler.anaYazi}]`,
    warning: `bg-[${renkler.uyari}] text-[${renkler.anaYazi}]`,
  };
  return (
    <button onClick={onClick} className={`${baseClasses} ${styles[variant]} ${className}`} type={type} disabled={disabled}>
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </button>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, baslik, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-all" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold" style={{ color: renkler.anaYazi }}>{baslik}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-200"><FiX size={20}/></button>
                </div>
                <div className="p-6 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
};

const SepetOlusturModal: React.FC<SepetOlusturModalProps> = ({ isOpen, onClose, onCreateSepet }) => {
    const [sepetIsmi, setSepetIsmi] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (sepetIsmi.trim()) {
            onCreateSepet(sepetIsmi.trim());
            setSepetIsmi('');
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} baslik="Yeni Sepet Oluştur">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: renkler.anaYazi }}>Sepet İsmi</label>
                    <input 
                        type="text" 
                        value={sepetIsmi}
                        onChange={(e) => setSepetIsmi(e.target.value)}
                        placeholder="Örn: Toplama PC, Bu Ayki Sepetim"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                </div>
                <div className="flex justify-end space-x-3">
                    <Buton variant="secondary" onClick={onClose}>İptal</Buton>
                    <Buton type="submit">Oluştur</Buton>
                </div>
            </form>
        </Modal>
    );
};

const UrunKarti: React.FC<UrunKartiProps> = ({ urun, onDetailsClick, onTercihToggle, onZamanPlanlamasiChange, onSepeteEkle, sepetler, onCreateSepet }) => {
  const [aktifResimIndex, setAktifResimIndex] = useState(0);
  const [sepetModalOpen, setSepetModalOpen] = useState(false);
  const [sepetSecimModalOpen, setSepetSecimModalOpen] = useState(false);
  
  const zamanPlanlamasiText = {
      'bu-ay': 'Bu Ay Al',
      'bu-yil': 'Bu Yıl Al', 
      'alınacaklar': 'Alınacaklar',
      'ihtiyaç': 'İhtiyaç'
  };

  const zamanPlanlamasiColor = {
      'bu-ay': 'bg-blue-100 text-blue-800',
      'bu-yil': 'bg-green-100 text-green-800',
      'alınacaklar': 'bg-yellow-100 text-yellow-800',
      'ihtiyaç': 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img src={urun.resimler[aktifResimIndex]} alt={urun.isim} className="w-full h-48 object-cover"/>
        {/* Resim sayısı göstergesi */}
        {urun.resimler.length > 1 && (
          <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
            {aktifResimIndex + 1} / {urun.resimler.length}
          </div>
        )}
        {/* Resim geçiş butonları */}
        {urun.resimler.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAktifResimIndex(aktifResimIndex === 0 ? urun.resimler.length - 1 : aktifResimIndex - 1);
              }}
              className="bg-black/50 text-white p-2 rounded-full ml-2 hover:bg-black/70"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAktifResimIndex(aktifResimIndex === urun.resimler.length - 1 ? 0 : aktifResimIndex + 1);
              }}
              className="bg-black/50 text-white p-2 rounded-full mr-2 hover:bg-black/70"
            >
              ›
            </button>
          </div>
        )}
        {/* Tercih badge sol üst */}
        {urun.tercihEdilen && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow">
            Tercih
          </div>
        )}
        {/* Zaman planlaması badge sol alt */}
        {urun.zamanPlanlamasi && (
          <div className={`absolute bottom-2 left-2 px-2 py-1 rounded-full text-xs font-semibold shadow ${zamanPlanlamasiColor[urun.zamanPlanlamasi]}`}>
            {zamanPlanlamasiText[urun.zamanPlanlamasi]}
          </div>
        )}
        {/* Tercih yıldızı sağ alt köşe (tıklanabilir) */}
        <div className="absolute bottom-2 right-2">
          <button
            title="Tercih Edilen"
            className="bg-white/80 backdrop-blur-sm p-1 rounded-full shadow focus:outline-none"
            onClick={() => onTercihToggle(urun.id)}
          >
            {urun.tercihEdilen ? (
              <FiStar size={22} className="text-yellow-400" />
            ) : (
              <FiStar size={22} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
          <p className="text-sm font-semibold" style={{ color: renkler.acikYazi }}>{urun.kategori}</p>
          <h4 className="text-lg font-bold truncate" style={{ color: renkler.anaYazi }}>{urun.isim}</h4>
          <p className="text-xl font-black mt-2" style={{ color: renkler.buton }}>
              {urun.fiyat.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
          </p>
          
          {/* Zaman Planlaması */}
          <div className="mt-3 mb-3">
              <select 
                  value={urun.zamanPlanlamasi || ''} 
                  onChange={(e) => onZamanPlanlamasiChange(urun.id, e.target.value as Urun['zamanPlanlamasi'])}
                  className="w-full p-2 border rounded-md text-sm"
              >
                  <option value="">Zaman Planlaması Seç</option>
                  <option value="bu-ay">Bu Ay Al</option>
                  <option value="bu-yil">Bu Yıl Al</option>
                  <option value="alınacaklar">Alınacaklar</option>
                  <option value="ihtiyaç">İhtiyaç</option>
              </select>
          </div>

          <div className="mt-4 flex space-x-2">
              <Buton onClick={() => onDetailsClick(urun)} className="w-full" variant="secondary">Detaylar</Buton>
              <a 
                  href={urun.satinAlmaLinki} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2"
                  style={{
                    background: renkler.buton,
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#0a1f2e')}
                  onMouseOut={e => (e.currentTarget.style.background = renkler.buton)}
              >
                  <FiShoppingCart size={16} />
                  Satın Al
              </a>
          </div>
      </div>

      {/* Sepet Seçim Modal */}
      <Modal isOpen={sepetSecimModalOpen} onClose={() => setSepetSecimModalOpen(false)} baslik="Sepete Ekle">
          <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                  {sepetler.map(sepet => (
                      <button
                          key={sepet.id}
                          onClick={() => {
                              onSepeteEkle(urun.id, sepet.id);
                              setSepetSecimModalOpen(false);
                          }}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                      >
                          <div>
                              <p className="font-semibold">{sepet.isim}</p>
                              <p className="text-sm text-gray-500">{sepet.urunler.length} ürün</p>
                          </div>
                          <FiPlus className="text-gray-400" />
                      </button>
                  ))}
              </div>
              <div className="border-t pt-4">
                  <Buton 
                      onClick={() => {
                          setSepetSecimModalOpen(false);
                          setSepetModalOpen(true);
                      }}
                      icon={FiPlus}
                      className="w-full"
                  >
                      Yeni Sepet Oluştur
                  </Buton>
              </div>
          </div>
      </Modal>

      <SepetOlusturModal 
          isOpen={sepetModalOpen} 
          onClose={() => setSepetModalOpen(false)} 
          onCreateSepet={onCreateSepet}
      />
  </div>
  );
};

const UrunDetayModal: React.FC<UrunDetayModalProps> = ({ isOpen, onClose, urun, onTercihToggle, onZamanPlanlamasiChange, onSepeteEkle, sepetler, onCreateSepet }) => {
  if (!urun) return null;
  
  const benzerUrunler = ornekUrunler.filter(p => p.kategori === urun.kategori && p.id !== urun.id).slice(0, 3);
  const [aktifResimIndex, setAktifResimIndex] = useState(0);
  const [sepetModalOpen, setSepetModalOpen] = useState(false);
  const [sepetSecimModalOpen, setSepetSecimModalOpen] = useState(false);
  
  const zamanPlanlamasiText = {
    'bu-ay': 'Bu Ay Al',
    'bu-yil': 'Bu Yıl Al', 
    'alınacaklar': 'Alınacaklar',
    'ihtiyaç': 'İhtiyaç'
  };

  const zamanPlanlamasiColor = {
      'bu-ay': 'bg-blue-100 text-blue-800',
      'bu-yil': 'bg-green-100 text-green-800',
      'alınacaklar': 'bg-yellow-100 text-yellow-800',
      'ihtiyaç': 'bg-gray-100 text-gray-800'
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} baslik={urun.isim}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative">
            <img src={urun.resimler[aktifResimIndex]} alt={urun.isim} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
            {/* Resim sayısı göstergesi */}
            {urun.resimler.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                {aktifResimIndex + 1} / {urun.resimler.length}
              </div>
            )}
            {/* Resim geçiş butonları */}
            {urun.resimler.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  onClick={() => setAktifResimIndex(aktifResimIndex === 0 ? urun.resimler.length - 1 : aktifResimIndex - 1)}
                  className="bg-black/50 text-white p-2 rounded-full ml-2 hover:bg-black/70"
                >
                  ‹
                </button>
                <button
                  onClick={() => setAktifResimIndex(aktifResimIndex === urun.resimler.length - 1 ? 0 : aktifResimIndex + 1)}
                  className="bg-black/50 text-white p-2 rounded-full mr-2 hover:bg-black/70"
                >
                  ›
                </button>
              </div>
            )}
          </div>
          {/* Küçük resimler */}
          {urun.resimler.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {urun.resimler.map((resim, index) => (
                <button
                  key={index}
                  onClick={() => setAktifResimIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    index === aktifResimIndex ? 'border-blue-500' : 'border-gray-300'
                  }`}
                >
                  <img src={resim} alt={`${urun.isim} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{color: renkler.buton}}>{urun.kategori}</p>
            <p className="text-sm font-medium text-blue-600">{urun.siteAdi}</p>
            <button 
                className={`${urun.tercihEdilen ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500`}
                onClick={() => onTercihToggle(urun.id)}
            >
              <FiStar size={24} />
            </button>
          </div>
          <p className="mb-4" style={{color: renkler.anaYazi}}>{urun.aciklama}</p>
          <div className="mb-4">
            {urun.etiketler.map((etiket: string) => (
              <span key={etiket} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{color: renkler.anaYazi}}>#{etiket}</span>
            ))}
          </div>
          <p className="text-3xl font-extrabold my-4" style={{ color: renkler.buton }}>
            {urun.fiyat.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
          </p>

          {/* Zaman Planlaması */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Zaman Planlaması</label>
            <select 
                value={urun.zamanPlanlamasi || ''} 
                onChange={(e) => onZamanPlanlamasiChange(urun.id, e.target.value as Urun['zamanPlanlamasi'])}
                className="w-full p-2 border rounded-md"
            >
                <option value="">Zaman Planlaması Seç</option>
                <option value="bu-ay">Bu Ay Al</option>
                <option value="bu-yil">Bu Yıl Al</option>
                <option value="alınacaklar">Alınacaklar</option>
                <option value="ihtiyaç">İhtiyaç</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <Buton icon={FiShoppingCart} onClick={() => setSepetSecimModalOpen(true)} className="w-full">Sepete Ekle</Buton>
            <a 
                href={urun.satinAlmaLinki} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <FiShoppingCart size={16} />
              Satın Al
            </a>
          </div>
        </div>
      </div>
       <div className="mt-10">
          <h3 className="text-xl font-bold mb-4" style={{color: renkler.anaYazi}}>Benzer Ürünler</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benzerUrunler.map(p => (
                  <div key={p.id} className="border rounded-lg p-3 flex items-center space-x-3 hover:bg-gray-50">
                      <img src={p.resimler[0]} alt={p.isim} className="w-16 h-16 object-cover rounded-md"/>
                      <div>
                          <p className="font-semibold text-sm">{p.isim}</p>
                          <p className="text-xs" style={{color: renkler.acikYazi}}>{p.fiyat.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Sepet Seçim Modal */}
      <Modal isOpen={sepetSecimModalOpen} onClose={() => setSepetSecimModalOpen(false)} baslik="Sepete Ekle">
          <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                  {sepetler.map(sepet => (
                      <button
                          key={sepet.id}
                          onClick={() => {
                              onSepeteEkle(urun.id, sepet.id);
                              setSepetSecimModalOpen(false);
                          }}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                      >
                          <div>
                              <p className="font-semibold">{sepet.isim}</p>
                              <p className="text-sm text-gray-500">{sepet.urunler.length} ürün</p>
                          </div>
                          <FiPlus className="text-gray-400" />
                      </button>
                  ))}
              </div>
              <div className="border-t pt-4">
                  <Buton 
                      onClick={() => {
                          setSepetSecimModalOpen(false);
                          setSepetModalOpen(true);
                      }}
                      icon={FiPlus}
                      className="w-full"
                  >
                      Yeni Sepet Oluştur
                  </Buton>
              </div>
          </div>
      </Modal>

      <SepetOlusturModal 
          isOpen={sepetModalOpen} 
          onClose={() => setSepetModalOpen(false)} 
          onCreateSepet={onCreateSepet}
      />
    </Modal>
  );
};

const UrunFormModal: React.FC<UrunFormModalProps> = ({ isOpen, onClose, onSave, initialData = {}, kategoriler }) => {
  const [isim, setIsim] = useState('');
  const [fiyat, setFiyat] = useState(0);
  const [kategori, setKategori] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [etiketler, setEtiketler] = useState('');
  const [resimler, setResimler] = useState<string[]>([]);
  const [siteAdi, setSiteAdi] = useState('');
  const [satinAlmaLinki, setSatinAlmaLinki] = useState('');
  const [yeniResimUrl, setYeniResimUrl] = useState('');
  
  useEffect(() => {
    if (isOpen && initialData) {
      setIsim(initialData.isim || '');
      setFiyat(initialData.fiyat || 0);
      setKategori(initialData.kategori || (kategoriler[0] || ''));
      setAciklama(initialData.aciklama || '');
      setEtiketler(initialData.etiketler ? initialData.etiketler.join(', ') : '');
      setResimler(initialData.resimler || []);
      setSiteAdi(initialData.siteAdi || '');
      setSatinAlmaLinki(initialData.satinAlmaLinki || '');
    }
  }, [isOpen, initialData, kategoriler]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      isim,
      fiyat: Number(fiyat),
      kategori,
      aciklama,
      etiketler: etiketler.split(',').map(e => e.trim()).filter(Boolean),
      resimler: resimler.length > 0 ? resimler : ['https://placehold.co/600x400/e9ecef/212529?text=Yeni+Ürün'],
      siteAdi,
      satinAlmaLinki,
    });
    onClose();
  };
  
  const resimEkle = () => {
    if (yeniResimUrl.trim()) {
      setResimler([...resimler, yeniResimUrl.trim()]);
      setYeniResimUrl('');
    }
  };
  
  const resimSil = (index: number) => {
    setResimler(resimler.filter((_, i) => i !== index));
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} baslik={initialData.id ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Ürün Adı</label>
            <input 
              type="text" 
              value={isim} 
              onChange={(e) => setIsim(e.target.value)} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Fiyat (₺)</label>
            <input 
              type="number" 
              value={fiyat} 
              onChange={(e) => setFiyat(Number(e.target.value))} 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Kategori</label>
            <select 
              value={kategori} 
              onChange={(e) => setKategori(e.target.value)} 
              className="w-full p-2 border rounded-md bg-white"
              required
            >
              {kategoriler.map(kat => (
                <option key={kat} value={kat}>{kat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Site Adı</label>
            <input 
              type="text" 
              value={siteAdi} 
              onChange={(e) => setSiteAdi(e.target.value)} 
              placeholder="Amazon, Trendyol, vb." 
              className="w-full p-2 border rounded-md" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Satın Alma Linki</label>
          <input 
            type="url" 
            value={satinAlmaLinki} 
            onChange={(e) => setSatinAlmaLinki(e.target.value)} 
            placeholder="https://example.com/urun-linki" 
            className="w-full p-2 border rounded-md" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Açıklama</label>
          <textarea 
            value={aciklama} 
            onChange={(e) => setAciklama(e.target.value)} 
            rows={3} 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Etiketler (virgülle ayırın)</label>
          <input 
            type="text" 
            value={etiketler} 
            onChange={(e) => setEtiketler(e.target.value)} 
            placeholder="örnek: elektronik, ofis, kablosuz" 
            className="w-full p-2 border rounded-md" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: renkler.anaYazi }}>Ürün Resimleri</label>
          <div className="space-y-3">
            {/* Mevcut resimler */}
            {resimler.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {resimler.map((resim, index) => (
                  <div key={index} className="relative">
                    <img src={resim} alt={`Resim ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => resimSil(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            {/* Sürükle bırak alanı */}
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 cursor-pointer hover:border-blue-400 transition-colors"
              onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
              onDrop={async (e: DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
                const files = Array.from(e.dataTransfer.files as FileList).filter((f: File) => f.type.startsWith('image/'));
                for (const file of files) {
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    if (typeof ev.target?.result === 'string') {
                      setResimler(prev => [...prev, ev.target!.result as string]);
                    }
                  };
                  reader.readAsDataURL(file as Blob);
                }
              }}
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.multiple = true;
                input.onchange = (e: any) => {
                  const files = Array.from(e.target.files as FileList).filter((f: File) => f.type.startsWith('image/'));
                  for (const file of files) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                      if (typeof ev.target?.result === 'string') {
                        setResimler(prev => [...prev, ev.target!.result as string]);
                      }
                    };
                    reader.readAsDataURL(file as Blob);
                  }
                };
                input.click();
              }}
            >
              <span className="mb-1">Sürükleyip bırakın veya tıklayarak resim seçin</span>
              <span className="text-xs text-gray-400">(Birden fazla resim seçebilirsiniz)</span>
            </div>
            {/* Yeni resim ekleme (URL ile) */}
            <div className="flex gap-2">
              <input 
                type="url" 
                value={yeniResimUrl} 
                onChange={(e) => setYeniResimUrl(e.target.value)} 
                placeholder="https://example.com/resim.jpg" 
                className="flex-1 p-2 border rounded-md" 
              />
              <Buton onClick={resimEkle} type="button" className="!px-4">Ekle</Buton>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <Buton variant="secondary" onClick={onClose}>İptal</Buton>
          <Buton type="submit">Kaydet</Buton>
        </div>
      </form>
    </Modal>
  );
};

const Sayfalama: React.FC<SayfalamaProps> = ({ toplamUrun, sayfaBasina, mevcutSayfa, onSayfaDegis }) => {
  const toplamSayfa = Math.ceil(toplamUrun / sayfaBasina);
  const baslangic = (mevcutSayfa - 1) * sayfaBasina;
  const bitis = Math.min(baslangic + sayfaBasina, toplamUrun);
  
  if (toplamSayfa <= 1) return null;
  
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
      <div className="text-sm text-gray-700">
        {baslangic + 1}-{bitis} / {toplamUrun} ürün
      </div>
      <div className="flex items-center gap-2">
        <Buton 
          variant="secondary" 
          onClick={() => onSayfaDegis(mevcutSayfa - 1)}
          disabled={mevcutSayfa === 1}
          className="!px-3 !py-1"
        >
          Önceki
        </Buton>
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, toplamSayfa) }, (_, i) => {
            const sayfa = i + 1;
            return (
              <button
                key={sayfa}
                onClick={() => onSayfaDegis(sayfa)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  sayfa === mevcutSayfa 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {sayfa}
              </button>
            );
          })}
        </div>
        <Buton 
          variant="secondary" 
          onClick={() => onSayfaDegis(mevcutSayfa + 1)}
          disabled={mevcutSayfa === toplamSayfa}
          className="!px-3 !py-1"
        >
          Sonraki
        </Buton>
      </div>
    </div>
  );
};

const KategoriYonetimi: React.FC<{
  kategoriler: string[];
  onEkle: (yeni: string) => void;
  onSil: (kat: string) => void;
}> = ({ kategoriler, onEkle, onSil }) => {
  const [yeniKategori, setYeniKategori] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      {kategoriler.map(kat => (
        <span key={kat} className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
          {kat}
          <button onClick={() => onSil(kat)} className="ml-2 text-red-500 hover:text-red-700" title="Sil"><FiX size={16} /></button>
        </span>
      ))}
      <form onSubmit={e => {e.preventDefault(); if (yeniKategori.trim()) { onEkle(yeniKategori.trim()); setYeniKategori(''); inputRef.current?.focus(); }}} className="flex items-center gap-2">
        <input ref={inputRef} type="text" value={yeniKategori} onChange={e => setYeniKategori(e.target.value)} placeholder="Kategori ekle" className="p-2 border rounded-md text-sm" />
        <Buton type="submit" className="!px-2 !py-1" icon={FiPlus}>Ekle</Buton>
      </form>
    </div>
  );
};

const FavoriUrunlerPage: React.FC = () => {
    const [arama, setArama] = useState('');
    const [kategori, setKategori] = useState('hepsi');
    const [tercihEdilenler, setTercihEdilenler] = useState(false);
    const [secilenSepet, setSecilenSepet] = useState('hepsi');
    const [urunler, setUrunler] = useState<Urun[]>(ornekUrunler);
    const [sepetler, setSepetler] = useState<Sepet[]>([
        { id: '1', isim: 'Toplama PC', urunler: [1, 5], olusturmaTarihi: new Date() },
        { id: '2', isim: 'Bu Ayki Sepetim', urunler: [1, 6], olusturmaTarihi: new Date() },
    ]);
    const fiyatlar = useMemo(() => urunler.map(u => u.fiyat), [urunler]);
    const minFiyat = Math.min(...fiyatlar);
    const maxFiyat = Math.max(...fiyatlar);
    const [fiyatMin, setFiyatMin] = useState(minFiyat);
    const [fiyatMax, setFiyatMax] = useState(maxFiyat);
    const [seciliUrun, setSeciliUrun] = useState<Urun | null>(null);
    const [kategoriListesi, setKategoriListesi] = useState<string[]>(Array.from(new Set(urunler.map(u => u.kategori))));
    const [urunFormOpen, setUrunFormOpen] = useState(false);
    const [duzenlenenUrun, setDuzenlenenUrun] = useState<Urun | null>(null);
    const [mevcutSayfa, setMevcutSayfa] = useState(1);
    const sayfaBasina = 12;
    const [zamanPlani, setZamanPlani] = useState<'hepsi' | 'bu-ay' | 'bu-yil' | 'alınacaklar' | 'ihtiyaç'>('hepsi');

    const kategoriler = useMemo(() => ['hepsi', ...Array.from(new Set(urunler.map(p => p.kategori)))], [urunler]);

    const filtreliUrunler = useMemo(() => {
        return urunler.filter(p => {
            const aramaUygun = arama === '' || 
                p.isim.toLowerCase().includes(arama.toLowerCase()) ||
                p.etiketler.some(etiket => etiket.toLowerCase().includes(arama.toLowerCase()));
            const kategoriUygun = kategori === 'hepsi' || p.kategori === kategori;
            const fiyatUygun = p.fiyat >= fiyatMin && p.fiyat <= fiyatMax;
            const tercihUygun = !tercihEdilenler || !!p.tercihEdilen;
            const sepetUygun = secilenSepet === 'hepsi' || sepetler.find(s => s.id === secilenSepet)?.urunler.includes(p.id);
            const zamanPlaniUygun = zamanPlani === 'hepsi' || p.zamanPlanlamasi === zamanPlani;
            return aramaUygun && kategoriUygun && fiyatUygun && tercihUygun && sepetUygun && zamanPlaniUygun;
        });
    }, [arama, kategori, fiyatMin, fiyatMax, tercihEdilenler, secilenSepet, urunler, sepetler, zamanPlani]);
    
    const sayfaliUrunler = useMemo(() => {
        const baslangic = (mevcutSayfa - 1) * sayfaBasina;
        return filtreliUrunler.slice(baslangic, baslangic + sayfaBasina);
    }, [filtreliUrunler, mevcutSayfa]);
    
    // Filtre değiştiğinde sayfa 1'e dön
    useEffect(() => {
        setMevcutSayfa(1);
    }, [arama, kategori, fiyatMin, fiyatMax, tercihEdilenler, secilenSepet, zamanPlani]);
    
    const detayTikla = (urun: Urun) => {
        setSeciliUrun(urun);
    };

    const modalKapat = () => {
        setSeciliUrun(null);
    };

    const tercihToggle = (urunId: number) => {
        setUrunler(prev => prev.map(urun => 
            urun.id === urunId 
                ? { ...urun, tercihEdilen: !urun.tercihEdilen }
                : urun
        ));
    };

    const zamanPlanlamasiChange = (urunId: number, plan: Urun['zamanPlanlamasi']) => {
        setUrunler(prev => prev.map(urun => 
            urun.id === urunId 
                ? { ...urun, zamanPlanlamasi: plan }
                : urun
        ));
    };

    const sepeteEkle = (urunId: number, sepetId?: string) => {
        if (sepetId) {
            setSepetler(prev => prev.map(sepet => 
                sepet.id === sepetId 
                    ? { ...sepet, urunler: [...sepet.urunler, urunId] }
                    : sepet
            ));
        }
    };

    const yeniSepetOlustur = (isim: string) => {
        const yeniSepet: Sepet = {
            id: Date.now().toString(),
            isim,
            urunler: [],
            olusturmaTarihi: new Date()
        };
        setSepetler(prev => [...prev, yeniSepet]);
    };

    // Kategori ekle/sil
    const kategoriEkle = (yeni: string) => {
      if (!kategoriListesi.includes(yeni)) setKategoriListesi(prev => [...prev, yeni]);
    };
    const kategoriSil = (kat: string) => {
      setKategoriListesi(prev => prev.filter(k => k !== kat));
      setUrunler(prev => prev.map(u => u.kategori === kat ? { ...u, kategori: kategoriListesi[0] || '' } : u));
    };

    // Ürün ekle
    const urunEkle = (urun: Partial<Urun>) => {
      setUrunler(prev => [
        ...prev,
        {
          ...urun,
          id: Date.now(),
          tercihEdilen: false,
          zamanPlanlamasi: undefined,
          sepetler: [],
        } as Urun
      ]);
    };

    // Ürün sil
    const urunSil = (id: number) => {
      setUrunler(prev => prev.filter(u => u.id !== id));
      setSeciliUrun(null);
    };

    // Ürün düzenle
    const urunGuncelle = (guncel: Partial<Urun>) => {
      setUrunler(prev => prev.map(u => u.id === duzenlenenUrun?.id ? { ...u, ...guncel } : u));
      setDuzenlenenUrun(null);
    };

    // Autocomplete state and logic (FavoriUrunlerPage component içinde):
    const [autocompleteOpen, setAutocompleteOpen] = useState(false);
    const autocompleteOptions = useMemo(() => {
      if (!arama) return [];
      const isimler = urunler
        .map(u => u.isim)
        .filter(isim => isim.toLowerCase().includes(arama.toLowerCase()));
      const etiketler = urunler
        .flatMap(u => u.etiketler)
        .filter((etiket, i, arr) =>
          etiket.toLowerCase().includes(arama.toLowerCase()) && arr.indexOf(etiket) === i
        );
      return [...isimler, ...etiketler].slice(0, 10);
    }, [arama, urunler]);

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h2 className="text-3xl font-bold" style={{ color: renkler.anaYazi }}>Favori Ürünler</h2>
              <Buton icon={FiPlus} onClick={() => setUrunFormOpen(true)} className="bg-[#112e4b] hover:bg-[#0a1f2e] text-white">Ürün Ekle</Buton>
            </div>
            <KategoriYonetimi kategoriler={kategoriListesi} onEkle={kategoriEkle} onSil={kategoriSil} />

            {/* Filtreleme Alanı */}
            <Kart baslik="Filtrele" headerAction={<Buton variant="secondary" onClick={() => {setArama(''); setKategori('hepsi'); setTercihEdilenler(false); setSecilenSepet('hepsi'); setFiyatMin(minFiyat); setFiyatMax(maxFiyat);}} className="">Temizle</Buton>}>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {/* Arama */}
                    <div className="relative">
                        <input
                          type="text"
                          placeholder="Ürün veya etiket ara..."
                          value={arama}
                          onChange={e => setArama(e.target.value)}
                          className="w-full p-2 pl-10 border rounded-md"
                          autoComplete="off"
                          onFocus={() => setAutocompleteOpen(true)}
                          onBlur={() => setTimeout(() => setAutocompleteOpen(false), 150)}
                        />
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{color: renkler.acikYazi}} />
                        {autocompleteOpen && arama.length > 0 && (
                          <div className="absolute z-20 left-0 right-0 mt-1 bg-white border rounded shadow-lg max-h-56 overflow-auto">
                            {autocompleteOptions.length > 0 ? (
                              autocompleteOptions.map((option, idx) => (
                                <button
                                  key={option + idx}
                                  type="button"
                                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                                  onMouseDown={() => {
                                    setArama(option);
                                    setAutocompleteOpen(false);
                                  }}
                                >
                                  {option}
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-2 text-gray-400 text-sm">Sonuç bulunamadı</div>
                            )}
                          </div>
                        )}
                      </div>
                    {/* Kategori */}
                    <select value={kategori} onChange={e => setKategori(e.target.value)} className="w-full p-2 border rounded-md bg-white">
                        {kategoriler.map(cat => <option key={cat} value={cat}>{cat === 'hepsi' ? 'Tüm Kategoriler' : cat}</option>)}
                    </select>
                    {/* Sepet */}
                    <select value={secilenSepet} onChange={e => setSecilenSepet(e.target.value)} className="w-full p-2 border rounded-md bg-white">
                        <option value="hepsi">Tüm Sepetler</option>
                        {sepetler.map(sepet => <option key={sepet.id} value={sepet.id}>{sepet.isim}</option>)}
                    </select>
                    {/* Fiyat Aralığı */}
                    <div className="flex flex-col justify-center">
                        <label className="mb-1 text-sm font-medium">Fiyat Aralığı</label>
                        <div className="col-span-2 flex items-center">
                            <input
                                type="range"
                                min={minFiyat}
                                max={fiyatMax}
                                value={fiyatMin}
                                onChange={e => setFiyatMin(Math.min(Number(e.target.value), fiyatMax - 1))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mr-2"
                                style={{'--thumb-color': renkler.buton} as any}
                            />
                            <input
                                type="range"
                                min={fiyatMin + 1}
                                max={maxFiyat}
                                value={fiyatMax}
                                onChange={e => setFiyatMax(Math.max(Number(e.target.value), fiyatMin + 1))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                style={{'--thumb-color': renkler.buton} as any}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Min: {fiyatMin.toLocaleString('tr-TR')} ₺</span>
                            <span>Max: {fiyatMax.toLocaleString('tr-TR')} ₺</span>
                        </div>
                    </div>
                    {/* Zaman Planı */}
                    <select value={zamanPlani} onChange={e => setZamanPlani(e.target.value as any)} className="w-full p-2 border rounded-md bg-white">
                        <option value="hepsi">Tüm Zaman Planları</option>
                        <option value="bu-ay">Bu Ay Al</option>
                        <option value="bu-yil">Bu Yıl Al</option>
                        <option value="alınacaklar">Alınacaklar</option>
                        <option value="ihtiyaç">İhtiyaç</option>
                    </select>
                    {/* Tercih Edilenler */}
                    <label className="flex items-center gap-2 bg-gray-50 rounded-md px-3 py-2 cursor-pointer select-none">
                        <input type="checkbox" checked={tercihEdilenler} onChange={e => setTercihEdilenler(e.target.checked)} className="form-checkbox h-5 w-5 text-yellow-500" />
                        <span>Tercih Edilenler</span>
                    </label>
                </div>
            </Kart>

            {/* Ürün Grid'i */}
            {sayfaliUrunler.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sayfaliUrunler.map(urun => (
                        <div className="relative group">
                          <UrunKarti 
                              key={urun.id} 
                              urun={urun} 
                              onDetailsClick={detayTikla}
                              onTercihToggle={tercihToggle}
                              onZamanPlanlamasiChange={zamanPlanlamasiChange}
                              onSepeteEkle={sepeteEkle}
                              sepetler={sepetler}
                              onCreateSepet={yeniSepetOlustur}
                          />
                          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Buton icon={FiEdit3} className="!px-2 !py-1 bg-yellow-400 hover:bg-yellow-500 text-white" onClick={() => setDuzenlenenUrun(urun)}>{''}</Buton>
                            <Buton icon={FiX} className="!px-2 !py-1 bg-red-500 hover:bg-red-600 text-white" onClick={() => urunSil(urun.id)}>{''}</Buton>
                          </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl font-semibold" style={{color: renkler.anaYazi}}>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                    <p style={{color: renkler.acikYazi}}>Lütfen filtrelerinizi değiştirmeyi deneyin.</p>
                </div>
            )}
            
            {/* Sayfalama */}
            {filtreliUrunler.length > 0 && (
                <Sayfalama 
                    toplamUrun={filtreliUrunler.length}
                    sayfaBasina={sayfaBasina}
                    mevcutSayfa={mevcutSayfa}
                    onSayfaDegis={setMevcutSayfa}
                />
            )}
            
            <UrunDetayModal 
                isOpen={!!seciliUrun} 
                onClose={modalKapat} 
                urun={seciliUrun}
                onTercihToggle={tercihToggle}
                onZamanPlanlamasiChange={zamanPlanlamasiChange}
                onSepeteEkle={sepeteEkle}
                sepetler={sepetler}
                onCreateSepet={yeniSepetOlustur}
            />
            <UrunFormModal 
                isOpen={urunFormOpen} 
                onClose={() => setUrunFormOpen(false)} 
                onSave={urunEkle} 
                kategoriler={kategoriListesi}
            />
            <UrunFormModal 
                isOpen={!!duzenlenenUrun} 
                onClose={() => setDuzenlenenUrun(null)} 
                onSave={urunGuncelle} 
                initialData={duzenlenenUrun || {}} 
                kategoriler={kategoriListesi}
            />
        </div>
    );
};

export default FavoriUrunlerPage; 
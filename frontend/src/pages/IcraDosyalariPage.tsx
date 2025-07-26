import React, { useMemo } from 'react';
import { FiEye, FiDownload, FiEdit, FiTrash2 } from 'react-icons/fi';

// İcra dosyaları veri tipi
interface IcraDosyasi {
  id: number;
  tarafRolu: string;
  mahkemeAdi: string;
  esasNo: string;
  dosyaTuru: string;
  acilisTarihi: string;
  dosyaDurumu: string;
  tutar?: number;
  aciklama?: string;
}
const icraVerileri: IcraDosyasi[] = [
    { id: 1, tarafRolu: 'Borçlu', mahkemeAdi: 'Adana 3. Genel İcra Dairesi', esasNo: '2025/27541', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2025-04-18 13:59:05', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 2, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 4. İcra Dairesi', esasNo: '2025/2945', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2025-04-16 16:57:27', dosyaDurumu: 'Açık' },
    { id: 3, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2025/271868', dosyaTuru: 'MTS', acilisTarihi: '2025-03-18 16:39:35', dosyaDurumu: 'Açık' },
    { id: 4, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 28. İcra Dairesi', esasNo: '2025/1180', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2025-01-13 21:44:10', dosyaDurumu: 'Açık' },
    { id: 5, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 35. İcra Dairesi', esasNo: '2024/27011', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-10-14 21:39:53', dosyaDurumu: 'Açık' },
    { id: 6, tarafRolu: 'Borçlu', mahkemeAdi: 'Tarsus İcra Dairesi', esasNo: '2024/2800', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2024-10-11 08:37:14', dosyaDurumu: 'Açık' },
    { id: 7, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2024/675768', dosyaTuru: 'MTS', acilisTarihi: '2024-09-26 17:29:14', dosyaDurumu: 'Açık' },
    { id: 8, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 21. İcra Dairesi', esasNo: '2024/6652', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-07-18 13:49:43', dosyaDurumu: 'Açık' },
    { id: 9, tarafRolu: 'Borçlu', mahkemeAdi: 'Silifke İcra Dairesi', esasNo: '2024/1651', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-05-29 16:56:42', dosyaDurumu: 'Açık' },
    { id: 10, tarafRolu: 'Borçlu', mahkemeAdi: 'Düzce İcra Dairesi', esasNo: '2024/10155', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-05-27 15:07:22', dosyaDurumu: 'Açık' },
    { id: 11, tarafRolu: 'Borçlu', mahkemeAdi: 'Düzce İcra Dairesi', esasNo: '2024/10152', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-05-27 15:02:17', dosyaDurumu: 'Açık' },
    { id: 12, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 2. İcra Dairesi', esasNo: '2024/415', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2024-05-20 10:24:59', dosyaDurumu: 'Açık' },
    { id: 13, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir Banka Alacakları İcra Dairesi', esasNo: '2024/18129', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-02-26 10:32:27', dosyaDurumu: 'Açık' },
    { id: 14, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 27. İcra Dairesi', esasNo: '2024/1913', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-02-19 12:28:03', dosyaDurumu: 'Açık' },
    { id: 15, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Banka Alacakları İcra Dairesi', esasNo: '2024/17015', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2024-01-24 11:58:11', dosyaDurumu: 'Açık' },
    { id: 16, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir Abonelik Sözleşmeleri İcra Dairesi', esasNo: '2023/23899', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2023-11-01 13:20:13', dosyaDurumu: 'Açık' },
    { id: 17, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2023/766107', dosyaTuru: 'MTS', acilisTarihi: '2023-10-05 00:00:00', dosyaDurumu: 'Kapalı (Borcun Tamamının Ödenmemesi)' },
    { id: 18, tarafRolu: 'Borçlu', mahkemeAdi: 'Bakırköy 14. İcra Dairesi', esasNo: '2023/4722', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2023-04-06 10:07:05', dosyaDurumu: 'Açık' },
    { id: 19, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 2. İcra Dairesi', esasNo: '2022/1362', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2022-11-22 09:26:29', dosyaDurumu: 'Açık' },
    { id: 20, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 6. İcra Dairesi', esasNo: '2022/13755', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2022-11-02 08:51:49', dosyaDurumu: 'Açık' },
    { id: 21, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2022/1083096', dosyaTuru: 'MTS', acilisTarihi: '2022-10-14 00:00:00', dosyaDurumu: 'Kapalı (Borcun Tamamının Ödenmemesi)' },
    { id: 22, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 18. İcra Dairesi', esasNo: '2022/12781', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2022-10-11 10:52:41', dosyaDurumu: 'Açık' },
    { id: 23, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 18. İcra Dairesi', esasNo: '2022/10723', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2022-08-18 18:16:28', dosyaDurumu: 'Açık (Durdurulmuş : Takibe İtiraz)' },
    { id: 24, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 21. İcra Dairesi', esasNo: '2022/10229', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2022-08-05 10:41:57', dosyaDurumu: 'Açık' },
    { id: 25, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 16. İcra Dairesi', esasNo: '2022/9567', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2022-07-21 00:00:00', dosyaDurumu: 'Kapalı (Vazgeçme/Feragat)' },
    { id: 26, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 3. İcra Dairesi', esasNo: '2022/758', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2022-01-28 10:33:51', dosyaDurumu: 'Açık' },
    { id: 27, tarafRolu: 'Borçlu', mahkemeAdi: 'Urla İcra Dairesi', esasNo: '2022/55', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2022-01-28 09:47:53', dosyaDurumu: 'Açık' },
    { id: 28, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 3. İcra Dairesi', esasNo: '2022/3201', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2022-01-27 09:17:24', dosyaDurumu: 'Açık' },
    { id: 29, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 3. İcra Dairesi', esasNo: '2022/102', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2022-01-06 00:00:00', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 30, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2021/1447911', dosyaTuru: 'MTS', acilisTarihi: '2021-12-17 00:00:00', dosyaDurumu: 'Kapalı (7420 Sayılı Kanunun Geçici 2.Maddesi Kapsamında Feragat)' },
    { id: 31, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 4. İcra Dairesi', esasNo: '2021/13990', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2021-12-10 22:58:24', dosyaDurumu: 'Açık (Durdurulmuş : Diğer)' },
    { id: 32, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 36. İcra Dairesi', esasNo: '2021/28892', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2021-11-11 00:00:00', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 33, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2021/1274561', dosyaTuru: 'MTS', acilisTarihi: '2021-11-09 03:24:33', dosyaDurumu: 'Kapalı (Borcun Tamamının Ödenmemesi)' },
    { id: 34, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Abonelik Sözleşmeleri İcra Dairesi', esasNo: '2021/88799', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2021-06-25 00:00:00', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 35, tarafRolu: 'Alacaklı', mahkemeAdi: 'Düzce İcra Dairesi', esasNo: '2021/8396', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2021-06-18 18:29:48', dosyaDurumu: 'Açık' },
    { id: 36, tarafRolu: 'Alacaklı', mahkemeAdi: 'Düzce İcra Dairesi', esasNo: '2021/8397', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2021-06-18 00:00:00', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 37, tarafRolu: 'Alacaklı', mahkemeAdi: 'Düzce İcra Dairesi', esasNo: '2021/8395', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2021-06-18 00:00:00', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 38, tarafRolu: 'Borçlu', mahkemeAdi: 'Merkezi Takip Sistemi', esasNo: '2021/451760', dosyaTuru: 'MTS', acilisTarihi: '2021-04-15 12:33:21', dosyaDurumu: 'Kapalı (Borcun Tamamının Ödenmemesi)' },
    { id: 39, tarafRolu: 'Alacaklı', mahkemeAdi: 'Karşıyaka 2. İcra Dairesi', esasNo: '2020/3014', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2020-09-17 10:45:36', dosyaDurumu: 'Açık (Durdurulmuş : Takibe İtiraz)' },
    { id: 40, tarafRolu: 'Alacaklı', mahkemeAdi: 'İstanbul 25. İcra Dairesi', esasNo: '2020/17964', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2020-08-28 14:37:13', dosyaDurumu: 'Açık (Durdurulmuş : Takibe İtiraz)' },
    { id: 41, tarafRolu: 'Borçlu', mahkemeAdi: 'Mersin 1. İcra Dairesi', esasNo: '2020/43', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2020-02-24 09:16:47', dosyaDurumu: 'Açık' },
    { id: 42, tarafRolu: 'Alacaklı', mahkemeAdi: 'Adana 2. Genel İcra Dairesi', esasNo: '2023/162595', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2020-02-06 15:43:50', dosyaDurumu: 'Açık (Durdurulmuş : Takibe İtiraz)' },
    { id: 43, tarafRolu: 'Borçlu', mahkemeAdi: 'Erdemli İcra Dairesi', esasNo: '2019/2749', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2019-09-19 08:44:03', dosyaDurumu: 'Açık' },
    { id: 44, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 2. İcra Dairesi', esasNo: '2019/6507', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2019-05-03 20:15:22', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 45, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 9. İcra Dairesi', esasNo: '2019/12766', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2019-03-08 00:00:00', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 46, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 9. İcra Dairesi', esasNo: '2019/7114', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2019-02-14 01:00:29', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 47, tarafRolu: 'Borçlu', mahkemeAdi: '(Kapatılan)Küçükçekmece 2. İcra Dairesi', esasNo: '2019/2052', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2019-01-28 13:51:18', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 48, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 11. İcra Dairesi', esasNo: '2018/11925', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2018-10-05 09:16:49', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 49, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 3. İcra Dairesi', esasNo: '2018/2864', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2018-05-23 14:27:16', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 50, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 1. İcra Dairesi', esasNo: '2017/1140', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2017-10-05 09:44:12', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 51, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 7. İcra Dairesi', esasNo: '2017/12383', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-09-21 10:36:53', dosyaDurumu: 'Açık' },
    { id: 52, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 1. İcra Dairesi', esasNo: '2017/10265', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-07-24 14:11:57', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 53, tarafRolu: 'Borçlu', mahkemeAdi: '(Kapatılan)Büyükçekmece 3. İcra Dairesi', esasNo: '2017/7756', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-06-28 10:54:03', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 54, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 17. İcra Dairesi', esasNo: '2017/6837', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-05-18 11:41:16', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 55, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 28. İcra Dairesi', esasNo: '2017/5955', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-05-10 12:41:47', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 56, tarafRolu: 'Borçlu', mahkemeAdi: '(Kapatılan)Manisa 3. İcra Dairesi', esasNo: '2017/2211', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-04-26 11:06:53', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 57, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 3. İcra Dairesi', esasNo: '2017/4238', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-04-24 14:59:56', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 58, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 12. İcra Dairesi', esasNo: '2017/11369', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-04-07 11:59:49', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 59, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 10. İcra Dairesi', esasNo: '2017/4588', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2017-03-23 15:30:25', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 60, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 12. İcra Dairesi', esasNo: '2016/4367', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2016-01-18 11:21:17', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 61, tarafRolu: 'Borçlu', mahkemeAdi: 'Bursa 4. Genel İcra Dairesi', esasNo: '2020/1719', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2015-07-14 00:00:00', dosyaDurumu: 'Açık' },
    { id: 62, tarafRolu: 'Borçlu', mahkemeAdi: '(Kapatılan)Adana 3. İcra Dairesi', esasNo: '2015/10147', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2015-06-17 10:36:25', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 63, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 9. İcra Dairesi', esasNo: '2015/2784', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2015-02-17 14:54:22', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 64, tarafRolu: 'Borçlu', mahkemeAdi: 'Mersin 5. İcra Dairesi', esasNo: '2015/1963', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2015-02-16 09:57:03', dosyaDurumu: 'Açık' },
    { id: 65, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 15. İcra Dairesi', esasNo: '2017/6762', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2014-11-26 14:38:29', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 66, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 11. İcra Dairesi', esasNo: '2014/16432', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2014-08-27 00:00:00', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 67, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 16. İcra Dairesi', esasNo: '2014/11904', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2014-06-11 13:33:29', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 68, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 2. İcra Dairesi', esasNo: '2014/11318', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2014-06-03 14:16:00', dosyaDurumu: 'Kapalı (Vazgeçme/Feragat)' },
    { id: 69, tarafRolu: 'Borçlu', mahkemeAdi: 'Tarsus İcra Dairesi', esasNo: '2018/1020', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2014-04-16 08:17:59', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 70, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 18. İcra Dairesi', esasNo: '2014/2687', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2014-01-30 15:51:37', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 71, tarafRolu: 'Borçlu', mahkemeAdi: 'Gaziosmanpaşa(Kapatılan) 2. İcra Dairesi', esasNo: '2013/11949', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-12-03 20:40:31', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 72, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 1. İcra Dairesi', esasNo: '2015/8821', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-11-14 10:51:43', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 73, tarafRolu: 'İstanbul Anadolu 4. İcra Dairesi', mahkemeAdi: '2018/32289', esasNo: 'İcra Dosyası', dosyaTuru: '2013-11-11 00:00:00', acilisTarihi: 'Kapalı (Haricen Tahsil)' , dosyaDurumu: '' },
    { id: 74, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 19. İcra Dairesi', esasNo: '2020/8315', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-10-24 12:46:37', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 75, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 2. İcra Dairesi', esasNo: '2013/11258', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-10-04 01:37:51', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 76, tarafRolu: 'Borçlu', mahkemeAdi: 'Adana 2. Genel İcra Dairesi', esasNo: '2023/43068', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-09-06 00:00:00', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 77, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 3. İcra Dairesi', esasNo: '2013/3211', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2013-07-24 16:26:31', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 78, tarafRolu: 'Borçlu', mahkemeAdi: 'Mersin 6. İcra Dairesi', esasNo: '2013/6106', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-07-19 00:00:00', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 79, tarafRolu: 'Borçlu', mahkemeAdi: 'Silifke İcra Dairesi', esasNo: '2014/5137', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-06-27 11:13:44', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 80, tarafRolu: 'Borçlu', mahkemeAdi: '(Kapatılan)Adana 5. İcra Dairesi', esasNo: '2013/1111', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-02-01 08:56:04', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 81, tarafRolu: 'Borçlu', mahkemeAdi: 'Tarsus İcra Dairesi', esasNo: '2018/721', dosyaTuru: 'Talimat Dosyası', acilisTarihi: '2013-01-21 18:45:58', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 82, tarafRolu: 'Borçlu', mahkemeAdi: 'Silifke İcra Dairesi', esasNo: '2013/129', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2013-01-15 09:47:29', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 83, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul 19. İcra Dairesi', esasNo: '2012/26702', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-12-03 14:25:14', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 84, tarafRolu: 'Borçlu', mahkemeAdi: 'Adana 2. Genel İcra Dairesi', esasNo: '2023/219859', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-11-13 14:38:09', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 85, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 1. İcra Dairesi', esasNo: '2012/7584', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-10-08 10:21:39', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 86, tarafRolu: 'Borçlu', mahkemeAdi: 'İstanbul Anadolu 16. İcra Dairesi', esasNo: '2012/8988', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-08-09 11:28:50', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 87, tarafRolu: 'Borçlu', mahkemeAdi: 'Karşıyaka 3. İcra Dairesi', esasNo: '2012/5108', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-07-06 13:34:42', dosyaDurumu: 'Kapalı (Vazgeçme/Feragat)' },
    { id: 88, tarafRolu: 'Borçlu', mahkemeAdi: 'Silifke İcra Dairesi', esasNo: '2012/2927', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-07-04 15:02:19', dosyaDurumu: 'Kapalı (İnfaz)' },
    { id: 89, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 10. İcra Dairesi', esasNo: '2012/6827', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-06-14 14:03:14', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 90, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 16. İcra Dairesi', esasNo: '2012/3981', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-04-06 12:07:10', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 91, tarafRolu: 'Borçlu', mahkemeAdi: 'İzmir 26. İcra Dairesi', esasNo: '2012/2292', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-03-02 10:55:23', dosyaDurumu: 'Kapalı (Takipsizlik)' },
    { id: 92, tarafRolu: 'Borçlu', mahkemeAdi: 'Isparta İcra Dairesi', esasNo: '2012/1117', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-02-24 15:00:50', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 93, tarafRolu: 'Borçlu', mahkemeAdi: '(Kapatılan)Adana 13. İcra Dairesi', esasNo: '2012/1649', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2012-02-10 14:07:21', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 94, tarafRolu: 'Borçlu', mahkemeAdi: 'Tarsus İcra Dairesi', esasNo: '2011/2434', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2011-09-08 09:06:48', dosyaDurumu: 'Kapalı (Haricen Tahsil)' },
    { id: 95, tarafRolu: 'Borçlu', mahkemeAdi: 'Antalya(Kapatılan) 11. İcra Dairesi', esasNo: '2010/22183', dosyaTuru: 'İcra Dosyası', acilisTarihi: '2010-09-23 09:46:12', dosyaDurumu: 'Kapalı (Takipsizlik)' },
  ];
  

const IcraDosyalariPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedTarafRolu, setSelectedTarafRolu] = React.useState('');
  const [selectedDosyaTuru, setSelectedDosyaTuru] = React.useState('');
  const [selectedDosyaDurumu, setSelectedDosyaDurumu] = React.useState('');
  const [dateRange, setDateRange] = React.useState({ start: '', end: '' });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  // Filtreleme fonksiyonu
  const filteredData = useMemo(() => {
    return icraVerileri.filter(dosya => {
      const matchesSearch = 
        dosya.mahkemeAdi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dosya.esasNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dosya.aciklama?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTarafRolu = !selectedTarafRolu || dosya.tarafRolu === selectedTarafRolu;
      const matchesDosyaTuru = !selectedDosyaTuru || dosya.dosyaTuru === selectedDosyaTuru;
      const matchesDosyaDurumu = !selectedDosyaDurumu || dosya.dosyaDurumu === selectedDosyaDurumu;
      
      const matchesDateRange = !dateRange.start || !dateRange.end || 
        (dosya.acilisTarihi >= dateRange.start && dosya.acilisTarihi <= dateRange.end);
      
      return matchesSearch && matchesTarafRolu && matchesDosyaTuru && matchesDosyaDurumu && matchesDateRange;
    });
  }, [searchTerm, selectedTarafRolu, selectedDosyaTuru, selectedDosyaDurumu, dateRange]);

  // Sayfalama
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Benzersiz değerler için
  const tarafRolleri = Array.from(new Set(icraVerileri.map(d => d.tarafRolu)));
  const dosyaTurleri = Array.from(new Set(icraVerileri.map(d => d.dosyaTuru)));
  const dosyaDurumlari = Array.from(new Set(icraVerileri.map(d => d.dosyaDurumu)));

  const handleView = (dosya: IcraDosyasi) => {
    alert(`Dosya Görüntüleniyor: ${dosya.mahkemeAdi} - ${dosya.esasNo}`);
  };

  const handleEdit = (dosya: IcraDosyasi) => {
    alert(`Dosya Düzenleniyor: ${dosya.mahkemeAdi} - ${dosya.esasNo}`);
  };

  const handleDelete = (dosya: IcraDosyasi) => {
    if (confirm(`"${dosya.mahkemeAdi} - ${dosya.esasNo}" dosyasını silmek istediğinizden emin misiniz?`)) {
      alert(`Dosya Silindi: ${dosya.mahkemeAdi} - ${dosya.esasNo}`);
    }
  };

  const getStatusColor = (durum: string) => {
    if (durum.toLowerCase().includes('açık')) {
      return 'bg-green-100 text-green-800';
    } else if (durum.toLowerCase().includes('kapalı')) {
      return 'bg-red-100 text-red-800';
    } else if (durum.toLowerCase().includes('durdurulmuş')) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Başlık */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">İcra Dosyaları</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FiEdit className="w-4 h-4" />
          Yeni Dosya Ekle
        </button>
      </div>

      {/* Filtreler */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filtreler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Arama */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Arama</label>
            <input
              type="text"
              placeholder="Mahkeme, esas no veya açıklama ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Taraf Rolü */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Taraf Rolü</label>
            <select
              value={selectedTarafRolu}
              onChange={(e) => setSelectedTarafRolu(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Tümü</option>
              {tarafRolleri.map(rol => (
                <option key={rol} value={rol}>{rol}</option>
              ))}
            </select>
          </div>

          {/* Dosya Türü */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dosya Türü</label>
            <select
              value={selectedDosyaTuru}
              onChange={(e) => setSelectedDosyaTuru(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Tümü</option>
              {dosyaTurleri.map(tur => (
                <option key={tur} value={tur}>{tur}</option>
              ))}
            </select>
          </div>

          {/* Dosya Durumu */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dosya Durumu</label>
            <select
              value={selectedDosyaDurumu}
              onChange={(e) => setSelectedDosyaDurumu(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Tümü</option>
              {dosyaDurumlari.map(durum => (
                <option key={durum} value={durum}>{durum}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tarih Aralığı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Tarihi</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bitiş Tarihi</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filtreleri Temizle */}
        <div className="mt-4">
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedTarafRolu('');
              setSelectedDosyaTuru('');
              setSelectedDosyaDurumu('');
              setDateRange({ start: '', end: '' });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Filtreleri Temizle
          </button>
        </div>
      </div>

      {/* Tablo */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Taraf Rolü
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mahkeme Adı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Esas No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosya Türü
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Açılış Tarihi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tutar (₺)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosya Durumu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((dosya) => (
                <tr key={dosya.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dosya.tarafRolu}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {dosya.mahkemeAdi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                    {dosya.esasNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {dosya.dosyaTuru}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(dosya.acilisTarihi).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {dosya.tutar?.toLocaleString('tr-TR') || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(dosya.dosyaDurumu)}`}>
                      {dosya.dosyaDurumu}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleView(dosya)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Görüntüle"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(dosya)}
                        className="text-green-600 hover:text-green-900"
                        title="Düzenle"
                      >
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(dosya)}
                        className="text-red-600 hover:text-red-900"
                        title="Sil"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sayfalama */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Önceki
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Sonraki
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> -{' '}
                <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> /{' '}
                <span className="font-medium">{filteredData.length}</span> sonuç
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Önceki
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === page
                        ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Sonraki
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcraDosyalariPage; 
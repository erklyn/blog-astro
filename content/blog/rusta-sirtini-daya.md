---
external: false
draft: false
title: Rust'a sırtını dayayabilirsin
description: Neden Rust'a güvenebiliriz ve Rust dilini öğrenirken harcadığımız zamana değer mi?
date: 2024-02-26
---

Neden Rust, bir çok araştırma, çalışma ve yazının belirtiği üzere, yüksek orandaki yazılım hataları memory safety'den kaynaklanıyor, bunun dışında faktörler yok mu kesinlikle var ama  çoğunluk sistemdeki memory'e hükmetmek isterken yaptığımız hatalardan kaynaklanıyor,

- Rust'ı Rust safe olarak yazarsak (yani unsafe blokları olmadan) biz yazılımcıların hata yapmamıza izin vermiyor. Bunu borrow checker ve ownership modeli ile sağlıyor, Ownership modelini binlerce Medium yazısından öğrenebilirsiniz, şahsi fikrim hiçbiri düzgün bir şekilde anlatamıyor ve benzetmelerle mental modeli size aktarmaya çalışıyorlar, benim şahsi fikrim Rust Book üzerinden anlamaya çalışmanız ve bir Rust programı yazarken compiler'ın dediklerine uymanız.

- Rust 2.0 diye bir şey olmayacak, Graydon Hoare Rust'ı oluştururken geriye dönük uyumluluğa önem verdi, açıkcası diğer dillerin neden bu tarz bir bakış açısı ile ilerlemediklerini düşünüyorum ve bir sebep bulamıyorum, geriye dönük uyumluluk Rust dilinde ve community'sinde önemli bir yer aldığından dolayı şimdi yazdığınız bir program 40 sene sonra çalışmaya devam edecek, ve güzel kısmı bundan 40 sene sonra daha hızlı çalışacak.


- Rust ve Programming Paradigms, her ne kadar Rust paradigm agnostic olsada Functional Progamming'e olan yakınlığı ortada olan bir dil ama Rust bence hem OOP'den hem FP'den güzel yerleri almış, OOP vs FP diyip uzunca bir yazı yazabilirim fakat bir anlamı olduğunu düşünmüyorum, kendi açımdan iki paradigm arasından FP bana daha mantıklı ve basit geliyor, ama bir anlamı yok bu paradigmlar sadece kod yazma yöntemleri bir araç bile değil, sadece düşünce yapınızı değiştirmenizi ve bir probleme nasıl yaklaşacağınızı değiştiriyor, Rust açık bir şekilde FP'den esinlenerek geliştirilmiş bir dil ilk compiler'ın OCaml ile yazıldığını düşünürsek  çok da şaşırtıcı değil. Bu bence güzel bir özellik, nerdeyse her code bloğu bir expression.

- Rust ile bir şirket'in tüm tech stack'ini oluşturabilirsiniz, her ne kadar bir şaka/meme olarak görülsede gerçekten herşey Rust ile yeniden yazılıyor bu da size tüm tech stacklerde olmanıza olanak sağlıyor, Rust ile Web Frontend, Web Backend, IOT, Mobil ve Masaüstü uygulamaları yazabiliyoruz, bunlar sadece application layer'da olanlari Ağ yapısında yapabildiklerimiz, Linux Kernelına Rust ile contribution yapıldığını düşünürsek ne kadar low bir level'a inebiliceğimizi siz düşünün. Bunu yaparken birde high level bir syntax kullanıyoruz.

 Konuyu toparlamadan önce tabiri caizse Rust'ın çapalarından bahsetmek istiyorum.
- Rust öğrenmesi zor bir dil, şimdiye kadar olan modellerin dışında, bir garbage collection yok onun yerine borrow checker ve ownership modeli var bunları anlamak ve bakış açımızı değiştirmek zor olabiliyor, özellikle sadece single execution/ single thread bir dilden geliyorsanız, Rust'ın zengin tip sistemi'de her ne kadar muazzam olsada ilk başta dili öğrenmeye çalışırken insanı korkutabiliyor.
- Compile/Derleme süreleri, Rust dendiğinde ilk akla gelenlerden oluyor ne yazık ki, compile etmeye bıraktım hemen go ile bir proje bitireyim gibi şakalar duymak çok da tuhaf değil, Bu konuda yapıcak bir şey yok gibi duruyor en azından kısa bir süre içinde, clean bir build alırken veya bir CI pipelinenda build alınırken acı çektiren bir compile süresi var, bunun bir çok sebebi var, Generics, Marco sistemi compiler'ın yapması gereken bir çok iş var ve bunu sadece sizin yazdığınız kod için değil birde diğer tüm dependencyleriniz için yapıyor, bu size runtime'da beklenmedik bir durum olmamasına yardımcı oluyor ama evet uzun sürüyor bu noktada diyecek bir şey yok.
- Rust dilini yazan yazılımcıda biraz inat olması gerekiyor, bu dil ile 2021 yılının Eylül ayından beri çalışıyorum ve ben açıkcası inatçı bir insan değilim, bir dahi olduğumuda düşünmüyorum, Go'dan Rust'a geçtiğimde az önce saydığım iki noktada beni Rust'dan uzaklaştırmıştı, daha sonrasında bunun sadece kendi korktum ve birazda skill issue (Yetenek problemi) olduğunu fark ettim ve biraz inatla bu dile daha fazla hakim olmaya başladım.

Bence Rust kazanıcak, az önce söylediğim gibi ben daha önce bu dilden kaçtım, beni korkuttu ve yazmak istemedim. Peki neden Rust'a sırtınızı dayayabilirsiniz diyorum şimdi.

Çünkü Rust sizi doğru kod yazmaya zorluyor, Rust ile yazdığımız programlar C'ye göre çok daha high level şekilde yazılsada nerdeyse C kadar hızlı çalışıyor, hızlı çalıştığı için daha az masraf çıkarıyor ve en önemlisi compile olduğu sürece size beklenmedik hatalarla yormuyor.

Hem iş veren tarafından baktığımda, hemde bir yazılımcı olarak baktığımda iki taraf içinde sadece artı görüyorum. Rust kazanıcak derken diğer bütün diller ölücek mi diyorum kesinlikle hayır, ama Rust'ı daha fazla yerde göreceğimize ve görmemiz gerektiğine inanıyorum.

Türkiye Rust Community'ye dahil olup Türk Rustaceanların arasında yer almak isterseniz diye Discord davet linkini açıklamaya bırakıyorum.

Günün sonunda Rust her yazılım dili gibi bir araç size en rahat geleni kullanabilirsiniz.

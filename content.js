/*
 * محتوى معرض وحدات تعزيز القيم
 * ------------------------------------------------------------
 * هذا هو الملف الوحيد الذي تحتاج تعديله لتحديث محتوى المعرض.
 * يجب أن تبقى القائمة 16 جمعية بالضبط (الشاشة رقم 1 هي الأولى في القائمة).
 *
 * الحقول:
 *   name        اسم الجمعية بالعربية كما يظهر على الشاشة.
 *   logo        مسار شعار الجمعية (PNG أو WEBP أو SVG) داخل مجلد assets/logos.
 *   video       رابط الفيلم التعريفي. يقبل:
 *                 - ملف فيديو منشور مع الموقع، مثل: "videos/a01.mp4"
 *                 - رابط يوتيوب، مثل: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
 *                 - رابط Vimeo، أو رابط Google Drive (مشارك لأي شخص لديه الرابط)، أو رابط مباشر لملف MP4
 *               اتركه فارغًا "" ليظهر للزائر أن الفيلم سيُتاح قريبًا.
 *   videoLink   رابط احتياطي للعرض (مثل Google Drive). يُستخدم إذا تعذّر تشغيل ملف video،
 *               ويظهر للزائر زر لفتحه في نافذة جديدة.
 *   description نبذة قصيرة اختيارية تظهر أسفل الفيلم.
 *
 * الشعارات مأخوذة من مجلد «الشعارات» في المشروع.
 */
window.EXHIBITION = {
  settings: {
    // "auto": تشغيل يوتيوب/Vimeo داخل الصفحة متى سمحت الاستضافة بذلك، وإلا يظهر زر لفتحه في نافذة جديدة.
    // true: التشغيل داخل الصفحة دائمًا. false: الفتح في نافذة جديدة دائمًا.
    embedExternalPlayers: "auto"
  },

  associations: [
    { name: "شركة مساق التربوية للتأهيل", logo: "assets/logos/masaq.png", video: "https://drive.google.com/file/d/1e4-cmdtOFbBRa6zEzkyV0iKJjydmXguq/view", description: "" },
    { name: "المجلس الفرعي التخصصي للجمعيات النسائية", logo: "assets/logos/majlis.png", video: "https://drive.google.com/file/d/1ue7X8wuBjvtLmxlU4dOWQ3V_3DyoLBcb/view", description: "" },
    { name: "جمعية الشقائق الخيرية", logo: "assets/logos/shaqaeq.png", video: "https://drive.google.com/file/d/1VjFeg1c5Nzv6TWQkxsu_X_fpPL5k8f1Y/view", description: "" },
    { name: "جمعية تواد للتنمية الأسرية بالجوف", logo: "assets/logos/tawad.png", video: "https://drive.google.com/file/d/1wPLgu8gHLa6-787WMs3gGrV8rD8n9cBk/view", description: "" },
    { name: "جمعية التنمية الأهلية بأحد رفيدة", logo: "assets/logos/ahad-rufaidah.png", video: "https://drive.google.com/file/d/1KyMHa-Zv0zSWg3LHlRDk4Pnq9WTFrGB8/view", description: "" },
    { name: "جمعية رواء للفتيات بتبوك", logo: "assets/logos/rawaa.png", video: "https://drive.google.com/file/d/1r9hGtJvLGGBxgiSZ2zgspxM8XVf9Co9R/view", description: "" },
    { name: "جمعية أفياء النسائية بمنطقة عسير", logo: "assets/logos/afyaa.png", video: "https://drive.google.com/file/d/1uy451mkrEdoZO2rxXcG8A_RZ6ELnTrGw/view", description: "" },
    { name: "جمعية التنمية الأهلية بأبها", logo: "assets/logos/abha.jpg", video: "https://drive.google.com/file/d/1YXxBzXrwsiPnpfmeLwzuenSMCPpvPjQd/view", description: "" },
    { name: "إيراق", logo: "assets/logos/eiraq.jpg", video: "https://drive.google.com/file/d/1LuqqxeiD_eTEhjEkjyzV-uUkmv2Le6kH/view", description: "" },
    { name: "كنف الورد", logo: "assets/logos/kanaf-alward.jpg", video: "https://drive.google.com/file/d/1elgJ7GGJVLTOVMmNsVc_BgnZNhwgcL3U/view", description: "" },
    { name: "سعداء: جمعية التنمية الأسرية بنجران", logo: "assets/logos/suadaa.png", video: "https://drive.google.com/file/d/114tH6SL4pcotQeQ00LnawnG3fzXFeHC6/view", description: "" },
    { name: "رأف: جمعية التنمية الأسرية بجازان", logo: "assets/logos/raaf.jpg", video: "https://drive.google.com/file/d/16C9sJgmMIa2SF7c0gahRwWNSqimMEXVn/view", description: "" },
    { name: "جمعية الرائدة النسائية الاجتماعية", logo: "assets/logos/raedah.png", video: "https://drive.google.com/file/d/16MIHNdY2z7oomTqzB-z7z-FfIKYDaMYd/view", description: "" },
    { name: "جمعية لبنات لتمكين الفتيات", logo: "assets/logos/labinat.jpg", video: "https://drive.google.com/file/d/16VXopErBMy9YduNR_RhAF7uhv5BSaIsu/view", description: "" },
    { name: "جمعية أفكار الاجتماعية", logo: "assets/logos/afkar.jpg", video: "https://drive.google.com/file/d/1GBtian9LeCAHIBXNzDUWX6jRBDby8gvo/view", description: "" },
    { name: "مركز وابل للتدريب", logo: "assets/logos/wabel.png", video: "https://drive.google.com/file/d/1gy9EAXxw-UovQQIEF2rV7oHh0NiLA0uY/view", description: "" }
  ]
};

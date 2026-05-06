/**
 * ╔══════════════════════════════════════════════════════╗
 * ║     DR. SAYANTANI CHAKRABORTY — SITE CONFIG         ║
 * ║  Edit ONLY this file to change anything on site.   ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * PHOTO INSTRUCTIONS
 * ──────────────────
 * 1. Name your photo exactly:  photo.jpg
 *    (all lowercase, .jpg extension)
 * 2. Put it in the images/ folder
 * 3. The line below is already set — do not change it:
 *       doctorPhoto: "images/photo.jpg"
 * 4. Upload images/photo.jpg to GitHub
 * 5. Done — photo shows automatically in Hero + About
 *
 * If photo fails to load, initials "SC" show as fallback.
 */

const CONFIG = {

  /* ── PHOTO ─────────────────────────────────────────────
     File must be named exactly: photo.jpg
     Place it in the images/ folder next to index.html
  ────────────────────────────────────────────────────── */
  doctorPhoto: "images/photo.jpg",


  /* ── DOCTOR DETAILS ────────────────────────────────── */
  doctor: {
    name:        "Dr. Sayantani Chakraborty",
    firstName:   "Sayantani",
    lastName:    "Chakraborty",
    initials:    "SC",
    degrees:     "MBBS, MD (Dermatology, Venereology & Leprosy)",
    degreesShort:"MBBS · MD (DVL)",
    specialties: "Dermatologist · Cosmetologist · Dermatosurgeon",
    tagline:     "ILS Hospitals, Kolkata · Practising Since 2004",
    heroDesc:    "A trusted name in clinical and aesthetic dermatology — bringing over 20 years of expertise to skin, hair, and cosmetology care in Kolkata.",
    experience:  "20+",
    rating:      "4.2",
    reviewCount: "124+",
    clinics:     "6+",
  },


  /* ── BIOGRAPHY ─────────────────────────────────────── */
  bio: [
    "Dr. Sayantani Chakraborty is one of Kolkata's most trusted dermatologists, bringing over two decades of dedicated expertise to clinical and aesthetic dermatology. Known for her empathetic approach, attention to detail, and commitment to evidence-based medicine, she has built a reputation for accurately diagnosing complex skin conditions and delivering lasting results.",
    "She completed her MBBS and MD (Dermatology, Venereology & Leprosy) from the prestigious National Medical College & Hospital, Kolkata, affiliated with the University of Calcutta. She currently serves as Assistant Professor at NRS Medical College and practises as Consultant Dermatologist at ILS Hospitals, Dum Dum, Tressbeau Dermatology & Laser Clinic (Salt Lake), SG Specialty Centre (Lake Town), and Trez Dermatology.",
    "Her areas of expertise span clinical dermatology, aesthetic medicine, laser surgery, dermato-surgery, and paediatric dermatology. She has authored multiple academic publications and presented research at national and international forums.",
  ],


  /* ── EXPERTISE ─────────────────────────────────────── */
  expertise: [
    "Clinical Dermatology",
    "Aesthetic Medicine",
    "Laser Surgery",
    "Paediatric Dermatology",
    "Hair Restoration (PRP)",
    "Dermato-Surgery",
    "Vitiligo & Psoriasis",
    "Anti-Aging Medicine",
  ],


  /* ── MEMBERSHIPS ───────────────────────────────────── */
  memberships: [
    "IADVL",
    "Association of Cutaneous Surgeons of India",
    "International Society of Dermatology",
    "Pigmentary Disorder Society",
    "West Bengal Medical Council",
  ],


  /* ── AFFILIATIONS (About card badges) ─────────────── */
  affiliations: ["ILS Hospitals", "NRS Medical College", "Tressbeau Clinic"],


  /* ── SCROLLING MARQUEE ─────────────────────────────── */
  marquee: [
    "MBBS — National Medical College, Kolkata",
    "MD Dermatology — National Medical College, Kolkata",
    "ILS Hospitals, Dum Dum",
    "NRS Medical College — Asst. Professor",
    "Member — IADVL",
    "Member — Association of Cutaneous Surgeons (I)",
    "Member — International Society of Dermatology",
    "Member — Pigmentary Disorder Society",
    "Tressbeau Dermatology & Laser Clinic, Salt Lake",
    "20+ Years of Clinical Excellence",
  ],


  /* ── SERVICES ──────────────────────────────────────── */
  services: [
    {
      icon: "🩺", title: "Clinical Dermatology",
      desc: "Diagnosis and treatment of a full spectrum of skin, nail, and mucosal disorders.",
      items: ["Psoriasis & Eczema Management","Vitiligo (PUVA, NB-UVB)","Acne & Rosacea Treatment","Urticaria & Skin Allergies","Fungal & Bacterial Infections","Autoimmune Skin Disorders"],
    },
    {
      icon: "✨", title: "Aesthetic & Cosmetic Dermatology",
      desc: "Science-backed aesthetic procedures delivering natural, rejuvenated results.",
      items: ["Laser Skin Resurfacing","Dermal Fillers & Botox","Chemical Peels (TCA, Salicylic)","Anti-Aging Treatments","Pigmentation & Melasma Therapy","Scar & Stretch Mark Reduction"],
    },
    {
      icon: "💆", title: "Hair & Scalp Medicine",
      desc: "Comprehensive trichology services for hair loss, scalp conditions, and restoration.",
      items: ["Androgenetic Alopecia","PRP Hair Restoration","Mesotherapy for Hair Growth","Alopecia Areata Management","Scalp Psoriasis & Dandruff","Hair Transplant Consultation"],
    },
    {
      icon: "👶", title: "Paediatric Dermatology",
      desc: "Gentle, specialised care for skin conditions in infants, children, and adolescents.",
      items: ["Atopic Dermatitis (Eczema)","Birthmarks & Vascular Lesions","Warts & Molluscum Contagiosum","Childhood Psoriasis","Infantile Hemangiomas"],
    },
    {
      icon: "⚡", title: "Laser & Surgical Procedures",
      desc: "Advanced laser technology and precision dermato-surgery for lasting outcomes.",
      items: ["Q-Switch Nd:YAG Laser","Fractional CO₂ Laser","Wart & Mole Removal","Electrocautery & Cryotherapy","Skin Tag Removal","Dermabrasion"],
    },
    {
      icon: "💉", title: "Injectables & Skin Boosters",
      desc: "Premium injectable treatments for volumisation, contouring, and deep hydration.",
      items: ["Hyaluronic Acid Fillers","Botulinum Toxin (Botox)","Platelet-Rich Plasma (PRP)","Profhilo Skin Remodelling","Under-Eye Tear Trough Filler"],
    },
  ],


  /* ── PATIENT REVIEWS ───────────────────────────────── */
  reviews: [
    { stars:5, text:"Dr. Sayantani is extremely knowledgeable and empathetic. I went for my decade-old pox scar issues — she recommended exactly the right treatment. I would love to continue under her supervision.", initials:"MG", name:"Mridula G.", source:"Practo · Acne Scar Treatment" },
    { stars:5, text:"My mother had blisters post hip replacement surgery. We had an excellent video consultation — Dr. Chakraborty listened patiently and the treatment worked brilliantly.", initials:"RB", name:"Ranjit B.", source:"Practo · Teledermatology" },
    { stars:4, text:"Very professional and thorough. She has extensive knowledge about skin conditions. The clinic is well-managed and she takes time to explain the treatment plan clearly.", initials:"PS", name:"Puja S.", source:"Google · Pigmentation Treatment" },
    { stars:5, text:"I had been struggling with hair fall for years. Dr. Chakraborty's approach was systematic — she identified the root cause and the PRP sessions have genuinely helped.", initials:"AD", name:"Arnab D.", source:"Justdial · Hair Fall Treatment" },
    { stars:5, text:"Excellent for paediatric skin issues. My child had severe eczema and Dr. Chakraborty handled it with such care and patience. She explained everything clearly to us as parents.", initials:"SM", name:"Suchitra M.", source:"Practo · Paediatric Dermatology" },
    { stars:4, text:"Got laser treatment for pigmentation and the results are visible. Dr. Sayantani is very experienced and up to date on latest treatments. ILS Hospitals is well-equipped.", initials:"TK", name:"Tanmoy K.", source:"Google · Laser Treatment" },
  ],


  /* ── VIDEO TESTIMONIALS ────────────────────────────────
     To add a real video:
     1. Open YouTube video → Share → Embed
     2. Copy the src="..." URL
     3. Paste it as videoUrl below
     Leave videoUrl as "" for a placeholder.
  ────────────────────────────────────────────────────── */
  videos: [
    { patient:"Rohit Sharma",   treatment:"Psoriasis Treatment Success",  videoUrl:"" },
    { patient:"Priya Banerjee", treatment:"Acne Scar Laser Recovery",      videoUrl:"" },
    { patient:"Surajit Das",    treatment:"PRP Hair Restoration Journey",  videoUrl:"" },
  ],


  /* ── CONTACT ───────────────────────────────────────── */
  contact: {
    phone:     "+91 XXXXXXXXXX",   // replace with real number
    whatsapp:  "91XXXXXXXXXX",     // digits only, no + or spaces
    email:     "",
  },


  /* ── GOOGLE MAP ────────────────────────────────────────
     HOW TO GET THE PINNED MAP URL:
     1. Go to maps.google.com
     2. Search: ILS Hospitals Dum Dum Kolkata
     3. Click the result so the RED PIN appears
     4. Click Share (↗) in the info panel
     5. Click "Embed a map"
     6. Copy ONLY the src="..." URL
     7. Paste it below replacing the current value
  ────────────────────────────────────────────────────── */
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.623!2d88.3763!3d22.6316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dad1f6a9b87%3A0xd7b36c2d06c01c93!2sILS%20Hospitals%2C%20Dum%20Dum!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin",


  /* ── PRIMARY CLINIC ────────────────────────────────── */
  primaryClinic: {
    name:     "ILS Hospitals, Dum Dum",
    address:  "Khudiram Bose Sarani, Mall Road, Kolkata – 700080",
    landmark: "Near Nager Bazar Flyover, Dum Dum",
    days:     "Tuesday, Wednesday & Thursday",
    hours:    "10:00 AM – 1:00 PM",
  },


  /* ── OTHER CLINICS ─────────────────────────────────── */
  otherClinics: [
    "Tressbeau Dermatology & Laser Clinic, Salt Lake",
    "SG Specialty Centre, Lake Town",
    "Trez Dermatology, Salt Lake",
    "NRS Medical College OPD, Kolkata",
  ],


  /* ── OPD HOURS TABLE ───────────────────────────────── */
  opdHours: [
    { day:"Tuesday",       time:"10:00 AM – 1:00 PM" },
    { day:"Wednesday",     time:"10:00 AM – 1:00 PM" },
    { day:"Thursday",      time:"10:00 AM – 1:00 PM" },
    { day:"Other Clinics", time:"By Appointment"      },
  ],


  /* ── BOOKING FORM OPTIONS ──────────────────────────── */
  concerns: [
    "Acne / Pimples","Hair Fall","Pigmentation","Psoriasis",
    "Vitiligo","Laser Treatment","Anti-Aging","Paediatric Skin",
    "Fungal Infection","Other",
  ],
  timeSlots: [
    "10:00 AM – 11:00 AM","11:00 AM – 12:00 PM",
    "12:00 PM – 1:00 PM","4:00 PM – 5:00 PM","5:00 PM – 6:00 PM",
  ],
  bookingClinics: [
    "ILS Hospitals, Dum Dum",
    "Tressbeau Dermatology & Laser Clinic, Salt Lake",
    "SG Specialty Centre, Lake Town",
    "Trez Dermatology, Salt Lake",
    "NRS Medical College (OPD)",
  ],


  /* ── AI CHATBOT KNOWLEDGE BASE ─────────────────────── */
  aiTopics: {
    acne:         { keys:["acne","pimple","breakout","blackhead","whitehead","comedone"], reply:`Acne is one of the most common conditions I treat:\n\n• **Mild acne** → Topical retinoids, salicylic acid cleansers\n• **Moderate acne** → Prescription antibiotics + retinoids\n• **Severe/cystic acne** → Oral isotretinoin after evaluation\n• **Acne scars** → Fractional CO₂ laser, chemical peels, microneedling\n\nBook a consultation for a personalised treatment plan.` },
    hair:         { keys:["hair","hairfall","hair fall","hair loss","alopecia","thinning","bald","scalp"], reply:`Hair loss has many causes — identifying the root cause is key:\n\n• **Androgenetic alopecia** → Minoxidil, Finasteride, PRP therapy\n• **Alopecia areata** → Intralesional steroids, immunotherapy\n• **Telogen effluvium** → Usually reversible with the right treatment\n• **Scalp conditions** → Seborrheic dermatitis, psoriasis\n\nDr. Chakraborty offers advanced PRP hair restoration and mesotherapy.` },
    pigmentation: { keys:["pigment","dark spot","melasma","tan","freckle","blemish","discolor"], reply:`Pigmentation treatment depends on the type:\n\n• **Melasma** → Chemical peels, hydroquinone, Tranexamic acid, Q-Switch laser\n• **PIH** → Retinoids, vitamin C, light peels\n• **Sun tan / dark spots** → Depigmentation creams + daily SPF 50\n• **Freckles** → Q-Switch Nd:YAG laser\n\nDaily sunscreen is critical alongside any pigmentation treatment.` },
    laser:        { keys:["laser","fractional","co2","nd:yag","ipl","phototherapy","puva","uvb"], reply:`Dr. Chakraborty offers a full range of laser treatments:\n\n• **Q-Switch Nd:YAG** → Pigmentation, tattoo removal, brightening\n• **Fractional CO₂** → Acne scars, wrinkles, resurfacing\n• **NB-UVB Phototherapy** → Vitiligo, psoriasis, eczema\n• **PUVA Therapy** → Extensive vitiligo and psoriasis\n\nMultiple sessions are usually needed for optimal results.` },
    antiaging:    { keys:["aging","wrinkle","botox","filler","anti-aging","fine line","sagging","rejuven"], reply:`Evidence-based anti-aging treatments available:\n\n• **Botox** → Forehead lines, crow's feet, frown lines\n• **Hyaluronic Acid Fillers** → Volume restoration, lips, tear trough\n• **Profhilo** → Deep skin hydration and bio-remodelling\n• **PRP Facial** → Collagen stimulation using your own growth factors\n\nA combination approach gives the most natural, lasting results.` },
    vitiligo:     { keys:["vitiligo","white patch","depigment","leucoderma"], reply:`Dr. Chakraborty has extensive experience treating vitiligo:\n\n• **NB-UVB Phototherapy** → First-line for widespread vitiligo\n• **Topical steroids / calcineurin inhibitors** → Localised patches\n• **PUVA therapy** → Extensive cases\n• **Surgical options** → Punch grafting, suction blister grafting\n\nEarly treatment generally yields better repigmentation results.` },
    psoriasis:    { keys:["psoriasis","scaly","plaque","silvery scale","flaky"], reply:`Psoriasis is managed with a long-term personalised approach:\n\n• **Topical therapy** → Corticosteroids, vitamin D analogues, coal tar\n• **Phototherapy** → NB-UVB is highly effective\n• **Systemic therapy** → Methotrexate, cyclosporine for moderate-severe cases\n• **Biologics** → For severe, treatment-resistant psoriasis\n\nLifestyle modifications also play an important role in managing psoriasis.` },
    eczema:       { keys:["eczema","atopic","itching","itchy","rash","dermatitis","dry skin"], reply:`Eczema (atopic dermatitis) is a chronic inflammatory skin condition:\n\n• **Mild eczema** → Moisturisers + mild topical steroids\n• **Moderate eczema** → Topical calcineurin inhibitors, antihistamines\n• **Severe eczema** → Systemic immunosuppressants or biologics\n• **Trigger management** → Identifying and avoiding personal triggers is key\n\nDr. Chakraborty specialises in paediatric eczema management as well.` },
  },


  /* ── COLOURS ───────────────────────────────────────────
     Change these to rebrand for a different doctor.
  ────────────────────────────────────────────────────── */
  colors: {
    primary:  "#0F4C75",
    dark:     "#0a3555",
    mid:      "#1565C0",
    light:    "#E3F2FD",
    accent:   "#90CAF9",
    textDark: "#1B262C",
    textMid:  "#2d3e47",
    textMuted:"#546E7A",
  },


  /* ── SEO ───────────────────────────────────────────── */
  seo: {
    title:       "Dr. Sayantani Chakraborty | Dermatologist & Cosmetologist | Kolkata",
    description: "Dr. Sayantani Chakraborty – MBBS, MD Dermatology. Expert Dermatologist & Cosmetologist at ILS Hospitals, Kolkata. Laser treatments, hair restoration, acne, vitiligo & more.",
    keywords:    "dermatologist kolkata, skin doctor kolkata, ILS hospitals dermatologist, laser treatment kolkata, hair fall treatment, acne treatment, vitiligo doctor kolkata",
  },


  /* ── FOOTER ────────────────────────────────────────── */
  footer: {
    year:    "2025",
    tagline: "Consultant Dermatologist · ILS Hospitals, Kolkata",
  },

};

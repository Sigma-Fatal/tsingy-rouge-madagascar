"use client";

import { useState } from "react";
import { Heart, MessageCircle, Send, MoreHorizontal } from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { dictionary } from "@/lib/dictionary";

const EVENTS_DATA = [
  {
    id: 1,
    image: "/images/evennnement.jpeg",
    date: "12 Nov 2026",
    caption: "Retour en images sur notre magnifique événement à Antananarivo. Merci à tous pour votre présence ! 🇲🇬✨",
    likes: 124,
    comments: [{ user: "Miora", text: "Superbe ambiance !" }]
  },
  {
    id: 2,
    image: "/images/recrutement_toliara.jpeg",
    date: "10 Nov 2026",
    caption: "Nous recrutons des commerciaux pour notre boutique de Toliara. Rejoignez l'aventure Tsingy Rouge ! 📩",
    likes: 89,
    comments: []
  },
  {
    id: 3,
    image: "/images/Malagasy.jpeg",
    date: "05 Nov 2026",
    caption: "Mise en avant de nos sublimes Lambas Malagasy. Fière de nos racines. ❤️",
    likes: 256,
    comments: [{ user: "Sarah", text: "Magnifique ! Où puis-je l'acheter ?" }]
  },
  {
    id: 4,
    image: "/images/recrutement_desiner.jpg",
    date: "01 Nov 2026",
    caption: "Tsingy Rouge recrute un Assistant Designer. Maîtrise d'Adobe Photoshop et Illustrator requise. 🎨",
    likes: 45,
    comments: []
  },
  {
    id: 5,
    image: "/images/evennnement_1.jpeg",
    date: "25 Oct 2026",
    caption: "Nos équipes en pleine action lors du défilé Tsingy Rouge. Un moment inoubliable.",
    likes: 178,
    comments: []
  },
  {
    id: 6,
    image: "/images/Malagasy_1.jpeg",
    date: "20 Oct 2026",
    caption: "La culture malgache à l'honneur à travers nos créations.",
    likes: 312,
    comments: [{ user: "Kevin", text: "Trop fier de cette marque !" }]
  }
];

export default function EventsSection() {
  const { lang } = useApp();
  const t = dictionary[lang].events;

  // État local pour gérer les likes et commentaires de manière dynamique
  const [posts, setPosts] = useState(EVENTS_DATA);
  const [commentInput, setCommentInput] = useState<{ [key: number]: string }>({});

  const handleLike = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (id: number, e: React.FormEvent) => {
    e.preventDefault();
    const text = commentInput[id];
    if (!text || text.trim() === "") return;

    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, comments: [...post.comments, { user: "Vous", text }] } 
        : post
    ));
    
    // Reset input
    setCommentInput({ ...commentInput, [id]: "" });
  };

  return (
    <section id="evenements" className="section-pad bg-ivory dark:bg-darkBg transition-colors duration-300">
      <div className="container-luxe">
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3 text-brand dark:text-gold">Tsingy Rouge en action</p>
          <h2 className="h-section text-charcoal dark:text-white">{t.title}</h2>
          <p className="mt-4 font-inter text-stone dark:text-gray-400">{t.desc}</p>
        </div>

        {/* Grille de Posts (Masonry / Feed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-darkSurface rounded-2xl shadow-soft overflow-hidden border border-charcoal/5 dark:border-white/5">
              
              {/* En-tête du post */}
              <div className="flex items-center justify-between p-4 border-b border-charcoal/5 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <img src="/images/logo_tsingy_rouge.jpg" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold font-inter text-sm text-charcoal dark:text-white">Tsingy Rouge Madagascar</p>
                    <p className="text-xs text-stone dark:text-gray-400">{post.date}</p>
                  </div>
                </div>
                <MoreHorizontal className="h-5 w-5 text-stone" />
              </div>

              {/* Image du post */}
              <div className="relative aspect-[4/3] bg-sand dark:bg-darkBg">
                <img src={post.image} alt="Publication" className="w-full h-full object-cover" loading="lazy" />
              </div>

              {/* Contenu */}
              <div className="p-4">
                <p className="font-inter text-sm text-charcoal dark:text-gray-200 leading-relaxed mb-4">
                  {post.caption}
                </p>

                {/* Statistiques (Likes / Comments) */}
                <div className="flex items-center justify-between text-xs text-stone dark:text-gray-400 pb-3 border-b border-charcoal/10 dark:border-white/10 mb-3">
                  <span>{post.likes} {t.like}s</span>
                  <span>{post.comments.length} {t.comments}</span>
                </div>

                {/* Boutons d'action */}
                <div className="flex items-center gap-4 mb-4">
                  <button onClick={() => handleLike(post.id)} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-charcoal dark:text-white transition-colors">
                    <Heart className="h-5 w-5" /> {t.like}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-charcoal dark:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" /> {t.comment}
                  </button>
                </div>

                {/* Zone de commentaires */}
                <div className="space-y-3">
                  {post.comments.map((c, i) => (
                    <div key={i} className="bg-sand dark:bg-darkBg p-3 rounded-xl text-sm font-inter">
                      <span className="font-bold text-charcoal dark:text-white mr-2">{c.user}:</span>
                      <span className="text-stone dark:text-gray-300">{c.text}</span>
                    </div>
                  ))}

                  {/* Formulaire d'ajout de commentaire */}
                  <form onSubmit={(e) => handleComment(post.id, e)} className="flex items-center gap-2 mt-3">
                    <input 
                      type="text" 
                      placeholder="Écrire un commentaire..."
                      value={commentInput[post.id] || ""}
                      onChange={(e) => setCommentInput({ ...commentInput, [post.id]: e.target.value })}
                      className="flex-1 bg-sand dark:bg-darkBg text-sm px-4 py-2.5 rounded-full outline-none focus:ring-1 focus:ring-brand dark:text-white placeholder-stone"
                    />
                    <button type="submit" className="p-2.5 rounded-full bg-brand text-white hover:bg-brandDeep transition-colors">
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
import { useParams } from 'react-router';
import { Calendar, Eye, Share2, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import { MatchCard } from '../components/MatchCard';

export function NewsArticle() {
  const { id } = useParams();

  const relatedMatches = [
    {
      id: '1',
      team1: { name: 'Team Spirit', logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop', score: 2 },
      team2: { name: 'OG', logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop', score: 1 },
      status: 'finished' as const,
      tournament: 'The International 2026',
      format: 'BO3'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <article className="space-y-6">
          {/* Category Badge */}
          <div>
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded uppercase tracking-wide">
              Tournament
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl leading-tight">
            Team Spirit Dominates Groups at The International 2026
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-foreground">Alex Chen</p>
                <p className="text-xs">Senior Esports Writer</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>May 10, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span className="font-mono">15,420 views</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=675&fit=crop"
              alt="Team Spirit"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The defending champions continue their impressive run with a flawless 7-0 record in the group stage,
              showcasing dominant performances across all positions and solidifying their status as tournament favorites.
            </p>

            <h2 className="mt-8 mb-4">Unstoppable Performance</h2>
            <p>
              Team Spirit's journey through the group stage has been nothing short of spectacular. Led by their star
              mid-laner TORONTOTOKYO, the team has displayed a level of coordination and individual skill that has left
              opponents struggling to find answers.
            </p>

            <p>
              In their most recent match against OG, Team Spirit demonstrated why they're considered one of the most
              complete teams in Dota 2 history. The game saw Yatoro's Terrorblade farming at unprecedented speeds,
              while Collapse's Mars created space with perfectly timed initiations.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "We've prepared extensively for this tournament. Every team here is world-class, but we believe in our
              strategy and our ability to adapt." - Miposhka, Team Spirit captain
            </blockquote>

            <h2 className="mt-8 mb-4">Key Factors Behind Their Success</h2>
            <p>
              Several factors have contributed to Team Spirit's dominance in the group stage:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Draft Flexibility:</strong> The team has shown proficiency with
                multiple strategies, from aggressive early-game lineups to late-game scaling compositions.
              </li>
              <li>
                <strong className="text-foreground">Individual Excellence:</strong> Every player has stepped up when
                needed, with standout performances from all five positions.
              </li>
              <li>
                <strong className="text-foreground">Mental Fortitude:</strong> Even when facing early deficits, the
                team has demonstrated the composure to fight back and secure victories.
              </li>
              <li>
                <strong className="text-foreground">Meta Understanding:</strong> Team Spirit appears to have solved
                the current patch, consistently making optimal itemization and timing decisions.
              </li>
            </ul>

            <h2 className="mt-8 mb-4">Looking Ahead to Playoffs</h2>
            <p>
              As the group stage concludes, all eyes turn to the playoff bracket. Team Spirit's perfect record has
              earned them a favorable seeding, but the road to back-to-back International championships remains
              challenging. Teams like PSG.LGD, Tundra Esports, and OG will be looking to upset the favorites.
            </p>

            <p>
              The playoff stage begins tomorrow, with Team Spirit facing off against Tundra Esports in what promises
              to be an epic clash between two of the tournament's strongest teams. Will Team Spirit maintain their
              momentum, or will fresh strategies emerge to challenge their reign?
            </p>

            <p>
              One thing is certain: The International 2026 is shaping up to be one of the most competitive tournaments
              in Dota 2 history, and Team Spirit is determined to prove they belong at the very top.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
            {['Team Spirit', 'The International', 'Group Stage', 'TORONTOTOKYO', 'Dota 2'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-muted text-sm rounded hover:bg-muted/80 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Share */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <h3>Share this article</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="Share on Twitter">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="Share on Facebook">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="Copy link">
                  <LinkIcon className="w-5 h-5" />
                </button>
                <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="More options">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Related Matches */}
          <div className="pt-8">
            <h3 className="mb-4">Related Matches</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-12 pt-8 border-t border-border">
          <h3 className="mb-6">Comments (142)</h3>
          <div className="space-y-4">
            {/* Comment Input */}
            <div className="bg-card border border-border rounded-lg p-4">
              <textarea
                className="w-full bg-input border border-border rounded-lg p-3 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Share your thoughts..."
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Post Comment
                </button>
              </div>
            </div>

            {/* Sample Comments */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span>User{i}</span>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Great analysis! Team Spirit really is looking unstoppable this tournament.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

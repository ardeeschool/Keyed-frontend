// src/app/(dashboard)/student/houses/page.tsx
import { Shield, BookOpen, Trophy, Calendar, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const houseData = {
  yourHouse: {
    name: 'Neptune',
    motto: 'Per aspera ad astra',
    rank: '2nd',
    yourPoints: 142,
    totalPoints: 3840,
    members: 71,
    score: 91,
    color: 'blue',
  },
  leaderboard: [
    { rank: 1, name: 'Phoenix', members: 86, points: 4210, color: 'red', isYou: false },
    { rank: 2, name: 'Neptune', members: 71, points: 3840, color: 'blue', isYou: true },
    { rank: 3, name: 'Solaris', members: 66, points: 3590, color: 'orange', isYou: false },
    { rank: 4, name: 'Everest', members: 63, points: 3210, color: 'green', isYou: false },
  ],
  pointsBreakdown: [
    { category: 'Academic', points: 1240, icon: BookOpen },
    { category: 'Sports', points: 920, icon: Trophy },
    { category: 'Events', points: 810, icon: Calendar },
    { category: 'Challenges', points: 870, icon: Trophy },
  ],
  events: [
    {
      id: 1,
      category: 'SPORTS',
      title: 'Annual Sports Day',
      date: '2026-03-15',
      location: 'Main Sports Ground',
      registered: true,
      points: '+200 pts',
      disciplines: ['100m Sprint', '4x100 Relay', 'Long Jump'],
    },
    {
      id: 2,
      category: 'ACADEMIC',
      title: 'House Debate Championship',
      date: '2026-03-22',
      location: 'Main Hall',
      registered: false,
      points: '+80 pts',
    },
    {
      id: 3,
      category: 'SPORTS',
      title: 'Neptune vs Phoenix: Football',
      date: '2026-03-28',
      location: 'Astroturf Pitch',
      registered: false,
      points: '+50 pts',
    },
    {
      id: 4,
      category: 'ARTS',
      title: 'Inter-House Art Exhibition',
      date: '2026-04-05',
      location: 'Art Block Gallery',
      registered: false,
      points: '+60 pts',
    },
    {
      id: 5,
      category: 'ACADEMIC',
      title: 'House Quiz Night',
      date: '2026-04-10',
      location: 'Main Hall',
      registered: true,
      points: '+70 pts',
    },
  ],
  feed: [
    { name: 'Arjun Mehta', message: 'Great performance at the swimming gala today everyone — 3 gold medals for Neptune!', time: '2h ago' },
    { name: 'Priya Sharma', message: "Don't forget Sports Day practice is Thursday 4pm at the main ground. All relay runners please attend.", time: '5h ago' },
    { name: 'Mr. D. Kapoor (House Tutor)', message: "Neptune is 370 points behind Phoenix. We can close this gap at Sports Day — 200 points up for grabs. Let's go!", time: '1d ago' },
    { name: 'Riya Nair', message: "Who's entered for the House Debate? We need a strong team this year.", time: '1d ago' },
    { name: 'Sam Chen', message: "I'm in for the debate. Also signed up for 100m and long jump for Sports Day.", time: '2d ago' },
  ],
};

export default function HousesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / <span className="text-gray-900 dark:text-white">Houses</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Houses</h1>

      {/* Your House Card */}
      <Card className="bg-white dark:bg-[#0D0E12]">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
             
              <div>
                <div className="flex items-center space-x-3 mb-2">
                     <Shield className="h-12 w-12 text-blue-500" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {houseData.yourHouse.name}
                  </h2>
                  <Badge variant="secondary" className="bg-black text-white dark:bg-gray-900 dark:text-white">
                    Your House
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                  {houseData.yourHouse.motto}
                </p>
                <div className="flex items-center space-x-8">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{houseData.yourHouse.rank}</div>
                    <div className="text-xs text-gray-500">Rank</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{houseData.yourHouse.yourPoints}</div>
                    <div className="text-xs text-gray-500">Your Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{houseData.yourHouse.totalPoints.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Total Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{houseData.yourHouse.members}</div>
                    <div className="text-xs text-gray-500">Members</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Circular Progress */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle className="text-gray-200 dark:text-gray-700 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent" />
                <circle className="text-blue-600 stroke-current" strokeWidth="8" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - houseData.yourHouse.score / 100)} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{houseData.yourHouse.score}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* House Leaderboard */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
          House Leaderboard
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {houseData.leaderboard.map((house) => (
            <Card
              key={house.rank}
              className={cn(
                'bg-white dark:bg-[#0D0E12]',
                house.isYou && 'ring-2 ring-blue-500 bg-white dark:bg-[#0D0E12]'
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 justify-start mb-4">
               
                    <div className={`text-4xl font-bold text-${house.color}-500 dark:text-${house.color}-500`}>{house.rank}

                    </div>
                    <div className="flex flex-wrap items-center space-x-2">
                      <div className="flex items-center gap-2 w-full">
                      <div className={`w-2 h-2 rounded-full bg-${house.color}-500`} />
                      <span className="font-bold text-gray-900 dark:text-white">{house.name}</span>
                      {house.isYou && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs dark:bg-blue-900/30 dark:text-blue-400">
                          You
                        </Badge>
                      )}
                      </div>
                      <div className="text-xs block w-full text-gray-500">{house.members} members</div>
                    </div>
                    
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {house.points.toLocaleString()} pts
                </div>
                <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${house.color}-500`}
                    style={{ width: `${(house.points / 4500) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Points Breakdown */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
          Points Breakdown — Neptune
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {houseData.pointsBreakdown.map((item) => (
            <Card key={item.category} className="bg-white dark:bg-black">
              <CardContent className="p-6 text-center">
                <item.icon className="h-8 w-8 mx-auto text-blue-500 mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.points}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.category}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* House Events */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
          House Events
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {houseData.events.map((event) => (
            <Card key={event.id} className="bg-white dark:bg-black">
              <CardContent className="p-6 space-y-3">
                <Badge
                  variant="secondary"
                  className={cn(
                    'text-xs font-semibold',
                    event.category === 'SPORTS' && 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                    event.category === 'ACADEMIC' && 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                    event.category === 'ARTS' && 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                  )}
                >
                  {event.category}
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white leading-tight">
                  {event.title}
                </h4>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>{event.date} · {event.location}</div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Badge
                    variant="secondary"
                    className={cn(
                      'text-xs',
                      event.registered
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                    )}
                  >
                    {event.registered ? 'Registered' : 'Not Registered'}
                  </Badge>
                  <span className="text-xs font-semibold text-gray-500">{event.points}</span>
                </div>
                {event.disciplines && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                    <div className="text-xs text-gray-500 mb-2">Your disciplines:</div>
                    <div className="flex flex-wrap gap-1">
                      {event.disciplines.map((disc) => (
                        <Badge key={disc} variant="outline" className="text-xs">
                          {disc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* House Feed */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
          House Feed
        </h3>
        <Card className="bg-white dark:bg-black">
          <CardContent className="p-6 space-y-4">
            {houseData.feed.map((post, index) => (
              <div key={index} className="flex items-start justify-between py-4 border-b border-gray-600 dark:border-gray-800 last:border-0 last:pb-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-900 dark:text-white">{post.name}</span>
                    <span className="text-xs text-gray-500">{post.time}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{post.message}</p>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <Input
                placeholder="Message Neptune house..."
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { 
  Home, 
  Search, 
  Bell, 
  User, 
  Zap, 
  Plus, 
  Image as ImageIcon, 
  Smile, 
  MapPin,
  MessageCircle,
  Repeat2,
  Heart,
  Share,
  MoreHorizontal,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import WeatherWidget from "@/components/WeatherWidget";
export default function Index() {
  const [postText, setPostText] = useState("");

  return (
    // Removed the opaque bg-color to allow global background image to show
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Main container: Adjusted for sticky sidebars */}
      <div className="relative flex max-w-[1440px] mx-auto h-screen">

        {/* Left Sidebar: Made sticky */}
        <aside className="w-64 flex flex-col sticky top-0 h-screen">
          <div className="flex-1 border-r border-white/10 bg-white/5 backdrop-blur-lg flex flex-col">
            {/* Logo */}
            <div className="h-[81px] flex items-center px-6 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <span className="text-white font-bold text-xl">Skill Issue</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <button className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 transition-colors">
                    <Home className="w-5 h-5 fill-blue-500" />
                    <span className="font-medium">Home</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 transition-colors">
                    <Search className="w-[18px] h-[18px]" />
                    <span className="font-medium">Search</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 transition-colors">
                    <Bell className="w-4 h-4" />
                    <span className="font-medium">Notifications</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 transition-colors">
                    <User className="w-4 h-4" />
                    <span className="font-medium">Profile</span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* New Post Button */}
            <div className="p-4 shrink-0">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Plus className="w-3.5 h-3.5" />
                New Post
              </button>
            </div>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-700/50 shrink-0">
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e67f24574a7de6712690255f492a9f152a23d1fe?width=80" 
                  alt="Sarah Johnson" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="text-white font-medium">Sarah Johnson</div>
                  <div className="text-gray-500 text-sm">@sarahjohnson</div>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content: Made scrollable */}
        <main className="flex-1 max-w-[864px] border-r border-gray-700/50 overflow-y-auto">
          {/* Header */}
          <header className="h-[81px] px-6 flex items-center border-b border-gray-700/50 sticky top-0 bg-black/30 backdrop-blur-lg z-10">
            <h2 className="text-white text-2xl font-bold">Home</h2>
          </header>

          {/* Post Composer */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex gap-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6f63bdd798dd3714fc3b3307fe9696def1c246a7?width=96" 
                alt="Your avatar" 
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <textarea 
                  placeholder="What's happening?"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-lg border border-white/20 rounded-[15px] px-4 py-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-white/10 min-h-[118px]"
                />
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-4">
                    <button className="text-blue-500 hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                      <ImageIcon className="w-4 h-4" />
                    </button>
                    <button className="text-blue-500 hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                      <Smile className="w-4 h-4" />
                    </button>
                    <button className="text-blue-500 hover:bg-blue-500/10 p-2 rounded-full transition-colors">
                      <MapPin className="w-3 h-3" />
                    </button>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed */}
          <div className="space-y-4 p-6">
            {/* Post 1 */}
            <article className="px-6 py-6 rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg">
              <div className="flex gap-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/32cb5326c329b8156f2567ef2c49ba2e743d666a?width=96" 
                  alt="Alex Chen" 
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold">Alex Chen</span>
                    <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                    <span className="text-gray-500">@alexchen</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">2h</span>
                  </div>
                  <p className="text-white mb-4">
                    Just shipped a new feature that I'm really excited about! The team worked incredibly hard on this one. Can't wait to see what everyone thinks 🚀
                  </p>
                  <div className="flex items-center gap-20">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">24</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Repeat2 className="w-[18px] h-4" />
                      <span className="text-sm">12</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">89</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-400 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Post 2 with Image */}
            <article className="px-6 py-6 rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg">
              <div className="flex gap-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/43cb8c73a768732869b5fb7218e17933088e7ba2?width=96" 
                  alt="Emma Rodriguez" 
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold">Emma Rodriguez</span>
                    <span className="text-gray-500">@emmarodriguez</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">4h</span>
                  </div>
                  <p className="text-white mb-4">
                    Beautiful sunrise this morning! Sometimes you just need to step outside and appreciate the simple things in life ✨
                  </p>
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/10870918561dfb0132ed95a453b3da45f48ceae1?width=1502" 
                      alt="Sunrise" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-20">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">8</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Repeat2 className="w-[18px] h-4" />
                      <span className="text-sm">5</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">156</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-400 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="px-6 py-6 rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg">
              <div className="flex gap-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9b73dde4179c8b8c24f161a24f19390b3aff500e?width=96" 
                  alt="Marcus Williams" 
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold">Marcus Williams</span>
                    <span className="text-gray-500">@marcuswilliams</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">6h</span>
                  </div>
                  <p className="text-white mb-4">
                    Pro tip for developers: Always write tests before you think you need them. Future you will thank present you 💻
                  </p>
                  <div className="flex items-center gap-20">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">45</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Repeat2 className="w-[18px] h-4" />
                      <span className="text-sm">78</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">234</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-400 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>

        {/* Right Sidebar: Made sticky */}
        <aside className="w-80 p-6 space-y-6 hidden lg:block sticky top-0 h-screen overflow-y-auto">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search SocialX"
              className="w-full bg-white/10 border border-gray-700 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 backdrop-blur-lg"
            />
          </div>

          {/* What's happening */}
          <div className="rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg">
            <h3 className="text-white font-bold text-xl mb-4">What's happening</h3>
            <div className="space-y-4">
              <div className="py-3 hover:bg-white/5 -mx-3 px-3 rounded-xl transition-colors cursor-pointer">
                <div className="text-gray-400 text-sm">Trending in Technology</div>
                <div className="text-white font-semibold">#AI2024</div>
                <div className="text-gray-400 text-sm">125K posts</div>
              </div>
              <div className="py-3 hover:bg-white/5 -mx-3 px-3 rounded-xl transition-colors cursor-pointer">
                <div className="text-gray-400 text-sm">Trending</div>
                <div className="text-white font-semibold">#WebDevelopment</div>
                <div className="text-gray-400 text-sm">89K posts</div>
              </div>
              <div className="py-3 hover:bg-white/5 -mx-3 px-3 rounded-xl transition-colors cursor-pointer">
                <div className="text-gray-400 text-sm">Trending in Design</div>
                <div className="text-white font-semibold">#UXDesign</div>
                <div className="text-gray-400 text-sm">56K posts</div>
              </div>
              <div className="py-3 hover:bg-white/5 -mx-3 px-3 rounded-xl transition-colors cursor-pointer">
                <div className="text-gray-400 text-sm">Trending</div>
                <div className="text-white font-semibold">#StartupLife</div>
                <div className="text-gray-400 text-sm">34K posts</div>
              </div>
            </div>
            <button className="text-blue-500 text-sm mt-4 hover:underline">Show more</button>
          </div>

          {/* Who to follow */}
          <div className="rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg">
            <h3 className="text-white font-bold text-xl mb-4">Who to follow</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f29791ca91055af2c402760dd6b5d1891b5a8a78?width=80" 
                  alt="David Kim" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold">David Kim</div>
                  <div className="text-gray-500 text-sm">@davidkim</div>
                </div>
                <button className="bg-white hover:bg-gray-200 text-black font-semibold px-4 py-1.5 rounded-full text-sm transition-colors">
                  Follow
                </button>
              </div>
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0784dcba84e96c41876df654db20310858079a66?width=80" 
                  alt="Lisa Zhang" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold">Lisa Zhang</div>
                  <div className="text-gray-500 text-sm">@lisazhang</div>
                </div>
                <button className="bg-white hover:bg-gray-200 text-black font-semibold px-4 py-1.5 rounded-full text-sm transition-colors">
                  Follow
                </button>
              </div>
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d4b6ee3463627162395d8ab31f4044e423589bff?width=80" 
                  alt="Ryan Martinez" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold">Ryan Martinez</div>
                  <div className="text-gray-500 text-sm">@ryanmartinez</div>
                </div>
                <button className="bg-white hover:bg-gray-200 text-black font-semibold px-4 py-1.5 rounded-full text-sm transition-colors">
                  Follow
                </button>
              </div>
            </div>
            <button className="text-blue-500 text-sm mt-4 hover:underline">Show more</button>
          </div>

          {/* Weather Widget */}
          <WeatherWidget />
        </aside>
      </div>
    </div>
  );
}
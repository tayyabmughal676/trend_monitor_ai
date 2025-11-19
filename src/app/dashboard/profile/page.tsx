import { User, Mail, Bell, Shield, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Profile & Settings</h1>
        <p className="text-gray-400">Manage your account and preferences.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Quick Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-3xl text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-purple to-neon-blue rounded-full p-1 mb-4">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                <User size={40} className="text-gray-400" />
                {/* <img src="..." /> would go here */}
              </div>
            </div>
            <h2 className="text-xl font-bold">Alex Designer</h2>
            <p className="text-sm text-gray-500 mb-4">alex@example.com</p>
            <button className="btn btn-sm btn-outline text-white border-white/20 hover:bg-white/10 w-full rounded-full">
              Change Avatar
            </button>
          </div>
          
          <div className="glass-panel p-6 rounded-3xl">
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Plan Usage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Monitored Brands</span>
                  <span className="text-neon-green">2 / 5</span>
                </div>
                <progress className="progress progress-success w-full h-2" value="40" max="100"></progress>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Monthly Queries</span>
                  <span className="text-neon-blue">850 / 1k</span>
                </div>
                <progress className="progress progress-info w-full h-2" value="85" max="100"></progress>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Forms */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="glass-panel p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-neon-purple" />
              <h3 className="text-xl font-bold">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">First Name</label>
                <input type="text" defaultValue="Alex" className="input-field w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white focus:border-neon-purple outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Last Name</label>
                <input type="text" defaultValue="Designer" className="input-field w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white focus:border-neon-purple outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Bio</label>
                <textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white focus:border-neon-purple outline-none h-24 resize-none" placeholder="Tell us about yourself..."></textarea>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="glass-panel p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-neon-pink" />
              <h3 className="text-xl font-bold">Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Alerts</p>
                  <p className="text-xs text-gray-500">Get daily summaries of your brand's performance.</p>
                </div>
                <input type="checkbox" className="toggle toggle-success" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Critical Alerts</p>
                  <p className="text-xs text-gray-500">Immediate notification for negative sentiment spikes.</p>
                </div>
                <input type="checkbox" className="toggle toggle-success" defaultChecked />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="glass-panel p-8 rounded-3xl">
             <div className="flex items-center gap-3 mb-6">
              <Shield className="text-neon-green" />
              <h3 className="text-xl font-bold">Security</h3>
            </div>
            <button className="btn btn-outline border-white/10 hover:bg-white/5 hover:border-white/30 text-white w-full justify-between group">
              <span>Change Password</span>
              <span className="text-gray-500 group-hover:text-white">********</span>
            </button>
          </div>

          <div className="flex justify-end">
            <button className="btn bg-white text-black hover:bg-gray-200 border-none rounded-xl px-8 font-bold flex items-center gap-2">
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

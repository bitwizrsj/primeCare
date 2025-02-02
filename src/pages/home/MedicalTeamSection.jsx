import React from 'react';
import { ArrowUpRight, Plus, Play } from 'lucide-react';
import vid from '../../../public/6824057-uhd_2160_3840_30fps.mp4'

const MedicalTeamSection = () => {
    const teamMembers = [
        { id: 1, status: 'online' },
        { id: 2, status: 'online' },
        { id: 3, status: 'offline' },
        { id: 4, status: 'online' },
        { id: 5, status: 'online' }
    ];

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8 my-auto">
                    {/* Team Section */}
                    <div className="bg-blue-50 p-8 rounded-3xl">


                        <h2 className="text-2xl font-semibold mb-6">
                            Our team <span className="text-gray-400">can help you get best</span><br />
                            consultant
                        </h2>

                        <div className="flex -space-x-4">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="relative">
                                    <img
                                        src={`/api/placeholder/48/48`}
                                        alt={`Team member ${member.id}`}
                                        className="w-12 h-12 rounded-full border-2 border-white"
                                    />
                                    <div
                                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="w-32 h-1 bg-blue-500 mt-6 rounded-full" />
                    </div>

                    {/* Subscribe Section */}
                    <div className="bg-blue-50 p-8 rounded-3xl">


                        <h2 className="text-2xl font-semibold mb-2">
                            Discover <span className="text-gray-400">our latest medical</span><br />
                            <span className="text-gray-400">features.</span>
                        </h2>

                        <form className="mt-6 space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-600 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column - Medical Visualization */}
                <div className="relative h-[600px] my-auto">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden flex">
                        <video
                            src={vid}
                            alt="Medical Professional"
                            className="w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Arrow Button */}
                        <button className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalTeamSection;
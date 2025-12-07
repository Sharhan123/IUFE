import Image from 'next/image'

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="text-center">
                {/* Logo with pulse animation */}
                <div className="relative w-64 h-64 mx-auto mb-4 animate-pulse">
                    <Image
                        src="/second-logo.png"
                        alt="IUFA Accounts Academy"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

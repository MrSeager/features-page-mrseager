//Components
import SectionFourItem from "./SectionFourItem";

export default function SectionFour() {
    return(
        <div className="z-4 grid grid-flow-col grid-rows-10 md:grid-rows-6 lg:grid-rows-4 md:grid-cols-2 lg:grid-cols-3 py-10 bg-white w-full shadow-md gap-3 px-5 lg:px-15">
            <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center text-center justify-center gap-3 py-5">
                <h2 className="text-[#4438CA] text-sm font-semibold duration-300 hover:scale-105">Testimonials</h2>
                <h2 className="text-3xl md:text-5xl font-semibold duration-300 hover:scale-105">Countless users, countless smiles</h2>
                <p className="text-[#525252] duration-300 hover:scale-105">
                    Explore our community&apos;s jurney and discover why satisfaction defines us.
                </p>
            </div>
            <SectionFourItem 
                img='/images/profile-thumbnail.jpg'
                name='Sarah Dole'
                userName='@sarahdole'
                text="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The veriety and depth of creativity are astounding!" 
            />
            <SectionFourItem 
                img='/images/profile-thumbnail_1.jpg'
                name='John Appleseed'
                userName='@johnseed'
                text="As an artis, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before." 
            />
            <SectionFourItem 
                img='/images/profile-thumbnail_2.jpg'
                name='Jean Gray'
                userName='@jeniic'
                text="I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way." 
            />

            <SectionFourItem 
                img='/images/profile-thumbnail_3.jpg'
                name='Jake Johnson'
                userName='@jakejohnson'
                text="From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create." 
            />
            <SectionFourItem 
                img='/images/profile-thumbnail_4.jpg'
                name='Igor Stravinsky'
                userName='@igorstrav'
                text="The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work" 
            />
            <SectionFourItem 
                img='/images/profile-thumbnail_5.jpg'
                name='Declan Rice'
                userName='@drice'
                text="I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection." 
            />
            
            <SectionFourItem 
                img='/images/profile-thumbnail_6.jpg'
                name='Marcus Thompson'
                userName='@mthompson'
                text="Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always implressed!" 
            />
            <SectionFourItem 
                img='/images/profile-thumbnail_7.jpg'
                name='Oliver Neverloved'
                userName='@olivernever'
                text="I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier." 
            />
            <SectionFourItem 
                img='/images/profile-thumbnail_8.jpg'
                name='Mark Dennis'
                userName='@marked'
                text="The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable" 
            />
        </div>
    );
}
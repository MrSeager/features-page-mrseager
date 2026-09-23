//Components
import Link from "next/link";
import SectionFiveItem from "./SectionFiveItem";
import CustomBtnA from "./CustomBtnA";

export default function SectionFive() {
    return(
        <div className="z-5 flex flex-col gap-3 py-10 bg-white w-full shadow-xl gap-3 px-5 lg:px-15">
            <div className="flex flex-col items-center text-center justify-center gap-3 py-5">
                <h2 className="text-3xl md:text-5xl font-semibold duration-300 hover:scale-105">Frequently asked questions</h2>
                <p className="text-[#525252] duration-300 hover:scale-105">
                    Choose any questions you need
                </p>
            </div>
            <div className="flex flex-col gap-2 divide-y divide-[#525252]/25">
                <SectionFiveItem
                    question="What types of images are available on your platform?"
                    answer="Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothering landscapes, we strive to provide a wide selection to cater to different tastes."
                />
                <SectionFiveItem
                    question="How can I access and download images from your platform?"
                    answer="Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks."
                />
                <SectionFiveItem
                    question="Do you offer images, or is there a subscription required?"
                    answer="We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs."
                />
                <SectionFiveItem
                    question="What payment methods do you accept for subscriptions?"
                    answer="We accept a variety of payment methods, including credt/debit cards and online payment gateways, to make the subscription process convenient for our users."
                />
                <SectionFiveItem
                    question="Can I cencel or modify my subscription at any time?"
                    answer="Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take affect immediatly, ensuring you have full control over your subscription preferences."
                />
                <SectionFiveItem
                    question="How frequently do you update your image collection?"
                    answer="We regulary update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added constantly to ensure there's always something new to discover on our platform."
                />
            </div>
            <div className="flex items-center justify-between ring ring-[#525252]/25 shadow-md p-5 rounded-md duration-300 ease-in-out hover:scale-101 hover:shadow-lg">
                <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-semibold">Can&apos;t find the answer you&apos;re looking for?</h5>
                    <p>Reach out to our <Link href={'/'} className="text-[#4438CA]">customer support</Link> team.</p>
                </div>
                <div>
                    <CustomBtnA
                        name="Get in touch"
                        classN='bg-[#4438CA] text-white px-5'
                    />
                </div>
            </div>
        </div>
    );
}
import React from "react";
import "../Styles/storyReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel__">
      <Story
        image="https://cdn6.aptoide.com/imgs/f/5/2/f52f55e60e99e6468c6a5059b8c2315f_screen.png?h=500"
        profileSrc="https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://play-lh.googleusercontent.com/WqfAbWgJpwaciQNgps5n4fueC7rp5fDvqkzcFSXX7IcZCrTIcTY8GOnV393THl40Aton=h1024-no-tmp_save_story_for_facebook_stories_download_apk_screenshot_5.jpg"
        profileSrc="https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=4655%2C3102"
        title="Mark Zuckerberg"
      />
      <Story
        image="https://img.gadgethacks.com/img/98/61/63691687076625/0/view-facebook-stories-inside-messenger-chat-threads-for-instant-feedback.w1456.jpg"
        profileSrc="https://photos5.appleinsider.com/gallery/37078-69429-Tim-Cook-at-Event-xl.jpg"
        title="Tim Cook"
      />
      <Story
        image="https://wersm.com/wp-content/uploads/2020/05/wersm-how-to-share-avatar-on-facebook-stories-1-473x1024.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
        title="Sundar Pichai"
      />
    </div>
  );
}

export default StoryReel;

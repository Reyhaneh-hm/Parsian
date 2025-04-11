const videoData = [
    {
        title: 'عنوان ویدیو اول',
        src: './video/v1.mp4',
        description: 'این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است.این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است.این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است که می‌تواند تا چند خط ادامه داشته باشد. این یک توضیح نمونه است.',
        tags: '#آموزشی #تکنولوژی',
        views: 123,
        date: '۱ ماه پیش',
        thumb: './image/8.jpg'
    },
    {
        title: 'عنوان ویدیو دوم',
        src: './video/v2.mp4',
        description: 'توضیح کوتاه‌تر برای ویدیوی دوم.',
        tags: '#طنز #سرگرمی',
        views: 542,
        date: '۲ ماه پیش',
        thumb: './image/9.jpg'
    },
    {
        title: 'عنوان ویدیو سوم',
        src: './video/v1.mp4',
        description: 'یک توضیح دیگر که درباره این ویدیو نوشته شده است.',
        tags: '#فیلم #سینما',
        views: 77,
        date: '۳ هفته پیش',
        thumb: './image/7.jpg'
    },
    {
        title: 'عنوان ویدیو چهارم',
        src: './video/v2.mp4',
        description: 'چند جمله درباره ویدیوی چهارم برای نمایش در توضیحات.',
        tags: '#ورزشی #تمرین',
        views: 891,
        date: 'دیروز',
        thumb: './image/6.jpg'
    },
    {
        title: 'عنوان ویدیو پنجم',
        src: './video/v1.mp4',
        description: 'متنی درباره ویدیوی پنجم.',
        tags: '#مستند #علمی',
        views: 234,
        date: 'امروز',
        thumb: './image/4.jpg'
    },
    {
        title: 'عنوان ویدیو ششم',
        src: './video/v2.mp4',
        description: 'متنی درباره ویدیوی ششم.',
        tags: '#مستند #علمی',
        views: 24,
        date: '1 سال پیش',
        thumb: './image/8.jpg'
    }
];

const relatedContainer = document.getElementById('relatedVideos');
const mainVideo = document.getElementById('mainVideo');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');
const videoTags = document.getElementById('videoTags');
const videoDate = document.getElementById('video-date');
const videoViews = document.getElementById('video-views');
const toggleDescBtn = document.getElementById('toggleDescBtn');

function renderRelatedVideos() {
    relatedContainer.innerHTML = '';
    for (let i = 1; i < videoData.length; i++) {
        const video = videoData[i];
        const item = document.createElement('div');
        item.className = 'related-video';
        item.dataset.index = i;
        item.innerHTML = `
  <img src="${video.thumb}" alt="Thumbnail">
  <div class="related-info">
    <h4>${video.title}</h4>
    <div class="meta">${video.date} - ${video.views} بازدید</div>
  </div>
`;
        item.addEventListener('click', () => swapVideos(i));
        relatedContainer.appendChild(item);
    }
}

function swapVideos(index) {
    const current = videoData[0];
    const selected = videoData[index];
    videoData[0] = selected;
    videoData[index] = current;
    updateMainVideo();
    renderRelatedVideos();
}

function updateMainVideo() {
    const data = videoData[0];
    mainVideo.src = data.src;
    videoTitle.textContent = data.title;
    videoDescription.querySelector('p').textContent = data.description;
    videoTags.innerHTML = data.tags
        .split(' ')
        .map(tag => `<span class="item">${tag}</span>`)
        .join('');
    videoDate.textContent = data.date;
    videoViews.textContent = `${data.views} بازدید`;
    toggleDescBtn.style.display = data.description.split(' ').length > 30 ? 'inline-block' : 'none';
    videoDescription.classList.remove('expanded');
    toggleDescBtn.textContent = 'توضیحات بیشتر';
}

toggleDescBtn.addEventListener('click', () => {
    const isExpanded = videoDescription.classList.toggle('expanded');
    toggleDescBtn.textContent = isExpanded ? 'توضیحات کمتر' : 'توضیحات بیشتر';
});

updateMainVideo();
renderRelatedVideos();

/*-------------------Slider Product-------------------*/
window.addEventListener("load", () => {
    document.querySelectorAll("[scroll_container]").forEach(t => {
        let e = false, i, s;

        t.addEventListener("mousedown", n => {
            e = true;
            i = n.pageX - t.offsetLeft;
            s = t.scrollLeft;
            t.classList.add("active");
        });

        t.addEventListener("mouseleave", () => {
            e = false;
            t.classList.remove("active");
        });

        t.addEventListener("mouseup", () => {
            e = false;
            t.classList.remove("active");
        });

        t.addEventListener("mousemove", n => {
            if (!e) return;
            n.preventDefault();
            const r = (n.pageX - t.offsetLeft - i);
            t.scrollLeft = s - r;
            t.classList.add("active");
        });

        t.addEventListener("touchstart", n => {
            e = true;
            i = n.touches[0].pageX - t.offsetLeft;
            s = t.scrollLeft;
        });

        t.addEventListener("touchend", () => {
            e = false;
            t.classList.remove("active");
        });

        t.addEventListener("touchmove", n => {
            if (!e) return;
            const r = (n.touches[0].pageX - t.offsetLeft - i);
            t.scrollLeft = s - r;
            t.classList.add("active");
        });
    });
});

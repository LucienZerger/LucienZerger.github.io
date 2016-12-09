angular.module('PhotoAlbum.Album')
.controller('albumController', function () {
  this.list = [
    {
      "date": "2016.09",
      "url": "https://goo.gl/photos/SHvTAYVbQjhTpFzr8",
      "tags": ["melody", "castlemaine", "playground", "phone wallpaper"]
    },
    {
      "date": "2016.08",
      "url": "https://goo.gl/photos/xuD93TdGjK9PkKXG7",
      "tags": ["melody", "home", "book week dress up", "iPad", "school", "science project"]
    },
    {
      "date": "2016.07",
      "url": "https://goo.gl/photos/69H1zMXCBvqH234w5",
      "tags": ["melody", "shopkins", "hand rash"]
    },
    {
      "date": "2016.06",
      "url": "https://goo.gl/photos/qtchMYyGE1wajbv98",
      "tags": ["melody", "school photos", "semester 1 report"]
    },
    {
      "date": "2016.05",
      "url": "https://goo.gl/photos/sMLUWERxCqf65czx5",
      "tags": ["melody", "lego", "school", "grandparent day"]
    },
    {
      "date": "2016.04",
      "url": "https://goo.gl/photos/eVAPumWJccxeFcAQ9",
      "tags": ["melody", "play-doh", "skype", "cats", "dryerase activity center"]
    },
    {
      "date": "2016.03",
      "url": "https://goo.gl/photos/UzDeGfUssqSbtPsu5",
      "tags": ["melody", "uniquely awesome kids", "school book club", "fallen tree", "face paint"]
    },
    {
      "date": "2016.02",
      "url": "https://goo.gl/photos/4hxnUE4GCuzZR1XMA",
      "tags": ["melody", "home", "jigsaw"]
    },
    {
      "date": "2016.01",
      "url": "https://goo.gl/photos/BnQERDqk3rx82iFT6",
      "tags": ["melody", "home", "school", "prep first day"]
    },
    {
      "date": "2015.12",
      "url": "https://goo.gl/photos/hJ5RC57NyHqWhJ8z9",
      "tags": ["melody", "home", "school", "prep orientation"]
    },
    {
      "date": "2015.11",
      "url": "https://goo.gl/photos/H1CQUViukSkgViBG8",
      "tags": ["melody", "lake eppalock caravan park", "5th birthday", "dress up", "home"]
    },
    {
      "date": "2015.10",
      "url": "https://goo.gl/photos/RWJHCUhDvzzKU2958",
      "tags": ["melody", "hospital", "chess table", "home", "random"]
    },
    {
      "date": "2015.09",
      "url": "https://goo.gl/photos/MkBmQJ6gKbUN8z938",
      "tags": ["herbalife", "melody", "home"]
    },
    {
      "date": "2015.08",
      "url": "https://goo.gl/photos/ZomJzhvbRQtGBWVTA",
      "tags": ["melody", "home"]
    },
    {
      "date": "2015.07",
      "url": "https://goo.gl/photos/ptsjhpWwRoQkraDz5",
      "tags": ["melody", "home", "cat", "hair"]
    },
    {
      "date": "2015.06",
      "url": "https://goo.gl/photos/2RPFozyyynseTRHf8",
      "tags": ["melody", "home", "allingham", "lake weeroona", "playground"]
    },
    {
      "date": "2015.05",
      "url": "https://goo.gl/photos/SMq5Lwp6kcb54Fsc7",
      "tags": ["melody", "home", "grandpa"]
    },
    {
      "date": "2014.05",
      "url": "https://goo.gl/photos/S6a9M9R7SgExu35c6",
      "tags": ["melody", "home", "swimming"]
    },
    {
      "date": "2014.04",
      "url": "https://goo.gl/photos/RQdYKCv8PXn3y4hz5",
      "tags": ["melody", "home", "swimming", "notebook"]
    },
    {
      "date": "2014.03",
      "url": "https://goo.gl/photos/gL9QJk2DxJNu4Y988",
      "tags": ["melody", "home", "glasses", "swimming", "cats", "rocks", "face paint", "mega blocks"]
    },
    {
      "date": "2014.02",
      "url": "https://goo.gl/photos/tZeMz7q5f7ciptiP8",
      "tags": ["melody", "allingham", "playground"]
    },
    {
      "date": "2014.01",
      "url": "https://goo.gl/photos/c68Y5jxgcTgC95p3A",
      "tags": ["melody", "home", "swimming", "bath", "pizza", "pram"]
    },
    {
      "date": "2013.12",
      "url": "https://goo.gl/photos/KQjn5PcBzEyjL5a86",
      "tags": ["melody", "home", "swimming", "bunk bed", "ymca"]
    },
    {
      "date": "2013.11",
      "url": "https://goo.gl/photos/U5pCMNHh2gQLD6rBA",
      "tags": ["melody", "home", "swimming", "bunk bed", "ymca", "lake eppalock caravan park", "3rd birthday", "lake weeroona", "playground", "bath"]
    },
    {
      "date": "2016.10",
      "url": "https://goo.gl/photos/ZJxBxK4ASPMXaSsn7",
      "tags": ["melody"]
    },
    {
      "date": "2016.11",
      "url": "https://goo.gl/photos/MA5ZJkbLCirQJSdr6",
      "tags": ["melody", "6th birthday"]
    }  ];


  this.listOrder = "up";

  this.setOrder = function(_){
    if(_ == "down")
      this.listOrder = "down";
    else
      this.listOrder = "up";
  };

  this.getOrder = function(){
    if(this.listOrder == "down")
      return "date";
    return "-date";
  };
});

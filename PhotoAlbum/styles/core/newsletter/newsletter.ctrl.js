angular.module('PhotoAlbum.Newsletter')
.controller('newsletterController', function () {
  this.list = [
    {
      "filename": "2016_001_newsletter_February_03.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WdDQzYkpPaEZNY2c/view",
    },
    {
      "filename": "2016_002_newsletter_February_10.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WLS0teGNybkstaUk/view",
    },
    {
      "filename": "2016_003_newsletter_February_17.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7Wb0VpTDg1WVhuLWM/view",
    },
    {
      "filename": "2016_004_newsletter_February.24.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WTWhUb09BY3dEU0U/view",
    },
    {
      "filename": "2016_005_newsletter_March_2.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WdlpOdXJydnpheG8/view",
    },
    {
      "filename": "2016_006_newsletter_March_9.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WUEdUMWJja0VfN2s/view",
    },
    {
      "filename": "2016_007_newsletter_March_16.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WN1Z1Q0V4aXNMVmM/view",
    },
    {
      "filename": "2016_008_newsletter_23_March.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeN1lnU0psMWJqNjQ/view",
    },
    {
      "filename": "2016_009_newsletter_April_13.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTec0xDSDl0bE92OEE/view",
    },
    {
      "filename": "2016_010_newsletter_April_20..pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeTnBsMjJJT3dfZk0/view",
    },
    {
      "filename": "2016_011_newsletter_April_27..pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeVHNqY0k1c1lONHM/view",
    },
    {
      "filename": "2016_012_newsletter_May_04.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeTDBSRkZaWk9saE0/view",
    },
    {
      "filename": "2016_013_newsletter_11_May.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeLVh3LW5XeW9DRVE/view",
    },
    {
      "filename": "2016_014_newsletter_18_May.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTebWNBOHdyQVFhQkE/view",
    },
    {
      "filename": "2016_015_newsletter_25_May.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTedldMQWdjVUtkeW8/view",
    },
    {
      "filename": "2016_016_newsletter_01_June.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeSUx2Q2I1Rlh1SHc/view",
    },
    {
      "filename": "2016_017_newsletter_08_June.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeQzRkSWRCV1BOMFk/view",
    },
    {
      "filename": "2016_018_newsletter_15_June.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeZE1IZUk1NS1HVlU/view",
    },
    {
      "filename": "2016_019_newsletter_22_June.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeenBjY3Fja2duQUE/view",
    },
    {
      "filename": "2016_020_newsletter_13_July.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTebVZ3TDAtNjJJanc/view",
    },
    {
      "filename": "2016_021_newsletter_20_July.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeZ084dFk1eWhZaTQ/view",
    },
    {
      "filename": "2016_022_newsletter_27_July.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeTUg3Yi1jRTBFcDQ/view",
    },
    {
      "filename": "2016_023_newsletter_03_August.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WUFJBQ3RxUEYtdjQ/view",
    },
    {
      "filename": "2016_024_newsletter_10_August.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WUU84TTNESVZ6LUk/view",
    },
    {
      "filename": "2016_025_newsletter_17_August.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WYUhDVmIxQzRMWk0/view",
    },
    {
      "filename": "2016_026_newsletter_24_August.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WcGNlQW9IOVlaZ1U/view",
    },
    {
      "filename": "2016_027_newsletter_31_August.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WME5uaEdlZXl2UXc/view",
    },
    {
      "filename": "2016_028_newsletter_07_September.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7Wa01sQ1A0TDdoLWc/view",
    },
    {
      "filename": "2016_029_newsletter_14_September.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WaUwzbnRCYWlKLXM/view",
    },
    {
      "filename": "2016_030_newsletter_05_October.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WWjBvcU9rcG9obFk/view",
    },
    {
      "filename": "2016_031_newsletter_12_October.pdf",
      "url": "https://drive.google.com/file/d/0B3K6lwLuo_7WZkdnNGRjU1g0TzA/view",
    },
    {
      "filename": "2016_032_newsletter_19_October.pdf",
      "url": "https://drive.google.com/file/d/0B2hg3-hloGTeaTZrcHkzRXhNeGc/view",
    }
  ];

  this.listOrder = "up";

  this.setOrder = function(_){
    if(_ == "down")
      this.listOrder = "down";
    else
      this.listOrder = "up";
  };

  this.getOrder = function(){
    if(this.listOrder == "down")
      return "filename";
    return "-filename";
  };
});

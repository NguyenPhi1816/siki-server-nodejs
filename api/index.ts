const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/home", (req, res) =>
  res.send([
    {
      id: 0,
      image:
        "https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp",
      name: "For you",
      products: [
        {
          id: 1,
          slug: "iphone-15-pro-max-12345",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29650000,
        },
        {
          id: 11,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29990000,
        },
        {
          id: 12,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29890000,
        },
        {
          id: 2,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro",
          averageRating: 5,
          price: 26990000,
        },
        {
          id: 3,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15 Plus",
          averageRating: 4,
          price: 23990000,
        },
        {
          id: 4,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15",
          averageRating: 4,
          price: 20690000,
        },
        {
          id: 5,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
          name: "Samsung Galaxy S24 5G",
          averageRating: 4,
          price: 20690000,
        },
        {
          id: 6,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
          name: "Samsung Galaxy S24+ 5G",
          averageRating: 4,
          price: 23490000,
        },
        {
          id: 7,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg",
          name: "Samsung Galaxy S24 Ultra 5G",
          averageRating: 3,
          price: 29690000,
        },
        {
          id: 8,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg",
          name: "Xiaomi 14 5G",
          averageRating: 5,
          price: 19990000,
        },
        {
          id: 9,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg",
          name: "Xiaomi Redmi Note 13 Pro",
          averageRating: 4,
          price: 6790000,
        },
        {
          id: 10,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg",
          name: "OPPO Reno11 5G",
          averageRating: 4,
          price: 10690000,
        },
      ],
    },
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
      products: [
        {
          id: 1,
          slug: "iphone-15-pro-max-12345",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29650000,
        },
        {
          id: 11,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29990000,
        },
        {
          id: 12,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro Max",
          averageRating: 4,
          price: 29890000,
        },
        {
          id: 2,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
          name: "Iphone 15 Pro",
          averageRating: 5,
          price: 26990000,
        },
        {
          id: 3,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15 Plus",
          averageRating: 4,
          price: 23990000,
        },
        {
          id: 4,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
          name: "Iphone 15",
          averageRating: 4,
          price: 20690000,
        },
      ],
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
      name: "Samsung",
      products: [
        {
          id: 5,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
          name: "Samsung Galaxy S24 5G",
          averageRating: 4,
          price: 20690000,
        },
        {
          id: 6,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
          name: "Samsung Galaxy S24+ 5G",
          averageRating: 4,
          price: 23490000,
        },
        {
          id: 7,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg",
          name: "Samsung Galaxy S24 Ultra 5G",
          averageRating: 3,
          price: 29690000,
        },
      ],
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png",
      name: "Xiaomi",
      products: [
        {
          id: 8,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg",
          name: "Xiaomi 14 5G",
          averageRating: 5,
          price: 19990000,
        },
        {
          id: 9,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg",
          name: "Xiaomi Redmi Note 13 Pro",
          averageRating: 4,
          price: 6790000,
        },
      ],
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a2/OPPO_LOGO_2019.png",
      name: "OPPO",
      products: [
        {
          id: 10,
          slug: "",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg",
          name: "OPPO Reno11 5G",
          averageRating: 4,
          price: 10690000,
        },
      ],
    },
  ])
);

app.get("/categories", (req, res) =>
  res.send([
    {
      id: 1,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp",
      parent: "Đồ Chơi - Mẹ & Bé",
      children: [
        "Thời Trang Cho Mẹ Và Bé",
        "Đồ chơi",
        "Đồ dùng cho bé",
        "Chăm sóc nhà cửa",
        "Chăm sóc mẹ mang thai, sau sinh",
        "Dinh dưỡng cho bé",
        "Tã, Bỉm",
        "Dinh dưỡng cho người lớn",
        "Dinh dưỡng cho mẹ",
        "Thực phẩm ăn dặm",
        "Chuẩn bị mang thai",
      ],
    },
    {
      id: 2,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp",
      parent: "Thực Phẩm Tươi Sống",
      children: [
        "Trái Cây",
        "Thịt, Trứng",
        "Cá, thuỷ hải sản",
        "Rau củ quả",
        "Thực phẩm Việt",
        "Sữa, bơ, phô mai",
        "Đông lạnh, mát",
        "Dầu ăn, gia vị",
        "Gạo, mì, nông sản",
        "Đồ hộp, đóng gói",
        "Bia, đồ uống",
        "Thực phẩm chay",
        "Dành cho trẻ em",
        "Bánh kẹo, giỏ quà",
        "Thức ăn, đồ thú cưng",
        "Chăm sóc cá nhân",
        "Chăm sóc nhà cửa",
      ],
    },
    {
      id: 3,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp",
      parent: "Điện Thoại - Máy Tính Bảng",
      children: [
        "Điện thoại Smartphone",
        "Điện thoại bàn",
        "Điện thoại phổ thông",
        "Máy đọc sách",
        "Máy tính bảng",
      ],
    },
    {
      id: 4,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp",
      parent: "Làm Đẹp - Sức Khỏe",
      children: [
        "Chăm sóc da mặt",
        "Dụng cụ làm đẹp",
        "Thực phẩm chức năng",
        "Trang điểm",
        "Chăm sóc cơ thể",
        "Máy Massage & Thiết bị chăm sóc sức khỏe",
        "Sản phẩm thiên nhiên & Khác",
        "Chăm sóc tóc và da đầu",
        "Chăm sóc cá nhân",
        "Nước hoa",
        "Hỗ trợ tình dục",
        "Bộ sản phẩm làm đẹp",
        "Dược mỹ phẩm",
      ],
    },
    {
      id: 5,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp",
      parent: "Điện Gia Dụng",
      children: ["Đồ dùng nhà bếp", "Thiết bị gia đình"],
    },
    {
      id: 6,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
      parent: "Thời trang nữ",
      children: [
        "Áo nữ",
        "Đầm nữ",
        "Quần nữ",
        "Áo liền quần - Bộ trang phục",
        "Áo khoác nữ",
        "Đồ ngủ - Đồ mặc nhà nữ",
        "Chân váy",
        "Trang phục bơi nữ",
        "Thời trang bầu và sau sinh",
        "Thời trang trung niên",
      ],
    },
    {
      id: 7,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp",
      parent: "Thời trang nam",
      children: [
        "Áo thun nam",
        "Quần nam",
        "Áo vest - Áo khoác nam",
        "Áo sơ mi nam",
        "Đồ lót nam",
        "Áo hoodie nam",
        "Đồ ngủ, đồ mặc nhà nam",
        "Đồ đôi - Đồ gia đình nam",
        "Áo nỉ - Áo len nam",
        "Đồ bơi - Đồ đi biển nam",
        "Quần áo nam trung niên",
        "Quần áo nam kích cỡ lớn",
      ],
    },
    {
      id: 8,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp",
      parent: "Giày - Dép nữ",
      children: [
        "Giày cao gót",
        "Dép - Guốc nữ",
        "Giày thể thao nữ",
        "Giày sandals nữ",
        "Giày búp bê",
        "Giày boots nữ",
        "Giày lười nữ",
        "Phụ kiện giày",
        "Giày Đế xuồng nữ",
      ],
    },
    {
      id: 9,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp",
      parent: "Giày - Dép nam",
      children: [
        "Giày lười nam",
        "Giày tây nam",
        "Giày thể thao nam",
        "Dép nam",
        "Giày sandals nam",
        "Phụ kiện giày nam",
        "Giày boots nam",
      ],
    },
    {
      id: 10,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp",
      parent: "Túi thời trang nữ",
      children: [
        "Túi đeo chéo, túi đeo vai nữ",
        "Ví nữ",
        "Túi xách tay nữ",
        "Túi tote nữ",
        "Phụ kiện túi",
      ],
    },
    {
      id: 11,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp",
      parent: "Túi thời trang nam",
      children: [
        "Ví nam",
        "Túi đeo chéo nam",
        "Túi xách công sở nam",
        "Túi bao tử, túi đeo bụng",
      ],
    },
    {
      id: 12,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp",
      parent: "Balo và Vali",
      children: [
        "Balo",
        "Túi du lịch và phụ kiện",
        "Balo, cặp, túi chống sốc laptop",
        "Vali, phụ kiện vali",
      ],
    },
    {
      id: 13,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp",
      parent: "Phụ kiện thời trang",
      children: [
        "Phụ kiện thời trang nữ",
        "Mắt kính",
        "Phụ kiện thời trang nam",
      ],
    },
    {
      id: 14,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp",
      parent: "Đồng hồ và Trang sức",
      children: [
        "Trang sức",
        "Đồng hồ nữ",
        "Đồng hồ nam",
        "Phụ kiện đồng hồ",
        "Đồng hồ trẻ em",
      ],
    },
    {
      id: 15,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp",
      parent: "Laptop - Máy Vi Tính - Linh kiện",
      children: [
        "Linh Kiện Máy Tính - Phụ Kiện Máy Tính",
        "Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi",
        "Thiết Bị Mạng",
        "Thiết Bị Lưu Trữ",
        "PC - Máy Tính Bộ",
        "Laptop",
      ],
    },
    {
      id: 16,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp",
      parent: "Nhà Cửa - Đời Sống",
      children: [
        "Trang trí nhà cửa",
        "Dụng cụ nhà bếp",
        "Sửa chữa nhà cửa",
        "Ngoài trời & sân vườn",
        "Nội thất",
        "Đèn & thiết bị chiếu sáng",
        "Đồ dùng và thiết bị nhà tắm",
        "Đồ dùng phòng ăn",
        "Đồ dùng phòng ngủ",
        "Đồ thờ cúng",
        "Nhạc cụ",
        "Hoa tươi và cây cảnh",
      ],
    },
    {
      id: 17,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp",
      parent: "Bách Hóa Online",
      children: [
        "Chăm sóc thú cưng",
        "Đồ uống - Pha chế dạng bột",
        "Thực phẩm Đóng hộp và Khô",
        "Gia Vị và Chế Biến",
        "Đậu & Hạt Các Loại",
        "Đồ Ăn Vặt",
        "Sữa và các Sản phẩm từ sữa",
        "Đồ Uống Không Cồn",
        "Đồ uống có cồn",
        "Bộ quà tặng",
      ],
    },
    {
      id: 18,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp",
      parent: "Hàng Quốc Tế",
      children: [
        "Nhà Cửa - Đời Sống",
        "Thời Trang",
        "Ô tô, xe máy, xe đạp",
        "Thiết Bị Số - Phụ Kiện Số",
        "Thể thao - Dã ngoại",
        "Làm Đẹp - Sức Khỏe",
        "Sách, Văn phòng phẩm & Quà lưu niệm",
        "Mẹ & Bé",
        "Điện gia dụng",
        "Bách hóa online",
        "Máy Ảnh - Máy Quay Phim",
        "Laptop & Máy Vi Tính",
        "Sản phẩm - thiết bị công nghiệp",
        "Tivi & Thiết Bị Nghe Nhìn",
        "Điện Thoại - Máy Tính Bảng",
      ],
    },
    {
      id: 19,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png.webp",
      parent: "Thiết Bị Số - Phụ Kiện Số",
      children: [
        "Phụ Kiện Điện Thoại và Máy Tính Bảng",
        "Phụ kiện máy tính và Laptop",
        "Thiết Bị Âm Thanh và Phụ Kiện",
        "Thiết Bị Thông Minh và Linh Kiện Điện Tử",
        "Thiết Bị Đeo Thông Minh và Phụ Kiện",
        "Thiết Bị Chơi Game và Phụ Kiện",
      ],
    },
    {
      id: 20,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp",
      parent: "Voucher - Dịch vụ",
      children: [
        "Thanh toán hóa đơn",
        "Khóa học",
        "Du lịch - Khách sạn",
        "Spa & Làm đẹp",
        "Dịch vụ khác",
        "Nhà hàng - Ăn uống",
        "Sự kiện - Giải trí",
        "Nha khoa - Sức khỏe",
        "Phiếu quà tặng",
        "Sim số - Thẻ cào - Thẻ game",
      ],
    },
    {
      id: 21,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp",
      parent: "Ô Tô - Xe Máy - Xe Đạp",
      children: [
        "Phụ kiện - Chăm sóc xe",
        "Xe điện",
        "Xe đạp",
        "Xe máy",
        "Ô tô",
        "Xe Scooter",
        "Dịch vụ, lắp đặt",
      ],
    },
    {
      id: 22,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp",
      parent: "Nhà Sách Tiki",
      children: [
        "Sách tiếng Việt",
        "Văn phòng phẩm",
        "Quà lưu niệm",
        "English Books",
      ],
    },
    {
      id: 23,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp",
      parent: "Điện Tử - Điện Lạnh",
      children: [
        "Âm thanh & Phụ kiện Tivi",
        "Phụ kiện điện lạnh",
        "Tủ lạnh",
        "Máy lạnh - Máy điều hòa",
        "Máy giặt",
        "Tủ đông - Tủ mát",
        "Tivi",
        "Máy nước nóng",
        "Máy rửa chén",
        "Máy sấy quần áo",
        "Tủ ướp rượu",
      ],
    },
    {
      id: 24,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp",
      parent: "Thể Thao - Dã Ngoại",
      children: [
        "Trang phục thể thao nữ",
        "Trang phục thể thao nam",
        "Đồ dùng dã ngoại",
        "Giày thể thao nam",
        "Phụ kiện thể thao",
        "Dụng cụ - thiết bị tập thể thao",
        "Các môn thể thao khác",
        "Dụng cụ câu cá",
        "Thể thao dưới nước",
        "Các môn thể thao đồng đội",
        "Các môn thể thao chơi vợt",
        "Các môn thể thao đối kháng",
        "Giày thể thao nữ",
        "Thực phẩm bổ sung năng lượng",
        "Dụng cụ leo núi",
      ],
    },
    {
      id: 25,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp",
      parent: "Máy Ảnh - Máy Quay Phim",
      children: [
        "Phụ Kiện Máy Ảnh, Máy Quay",
        "Camera Giám Sát",
        "Thiết Bị Ánh Sáng",
        "Camera Hành Trình - Action Camera và Phụ Kiện",
        "Balo - Túi Đựng - Bao Da",
        "Ống Kính - Ống Ngắm",
        "Ống Kính (Lens)",
        "Thiết Bị Quay Phim",
        "Máy Bay Camera và Phụ Kiện",
        "Máy Ảnh",
      ],
    },
    {
      id: 26,
      imageUrl:
        "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp",
      parent: "Từ Khóa Được Quan Tâm",
      children: [
        "máy sưởi",
        "đèn sưởi",
        "quạt tích điện sunhouse",
        "máy sấy tóc philips",
        "bàn ủi hơi nước đứng",
        "bàn là hơi nước philip",
        "may sưởi xiaomi",
        "bình nươc nóng ariston",
        "máy sưởi xiaomi",
        "máy hút bụi giường nệm",
        "cây nước nóng lạnh toshiba",
        "robot hút bụi lau nhà của nhật",
        "đèn sưởi âm trần",
        "nồi cơm điện tefal",
      ],
    },
  ])
);

app.get("/products/iphone-15-pro-max-12345", (req, res) =>
  res.send({
    id: 1,
    slug: "iphone-15-pro-max-12345",
    name: "Iphone 15 Pro Max",
    description:
      '<h3>Nội dung quảng cáo</h3>\n<p>Giờ đây với thiết kế titan nhẹ và bền chắc, cùng chip A17 Pro cho khả năng đa nhiệm khủng. Bắt trọn những khoảnh khắc đặc biệt khi đang di chuyển với hệ thống camera chuyên nghiệp linh hoạt hơn. Và một bước nhảy vọt về tốc độ truyền dữ liệu với USB-C cùng chuẩn USB 3.</p>\n<p>&nbsp;</p>\n<h3>Tính năng nổi bật</h3>\n<ul>\n<li>ĐƯỢC ĐÚC TỪ TITAN&nbsp;— iPhone 15 Pro Max sở hữu thiết kế titan chuẩn hàng không vũ trụ, nhẹ và bền chắc với mặt sau bằng kính nhám. Mặt trước Ceramic Shield bền chắc hơn mọi mặt kính điện thoại thông minh. Và có khả năng chống tia nước, chống nước và chống bụi.<sup>1</sup></li>\n<li>MÀN HÌNH TIÊN TIẾN — Màn hình Super Retina XDR 6,7"<sup>2</sup> với ProMotion tăng tốc độ làm mới lên đến 120Hz khi bạn cần đến hiệu năng đồ họa vượt trội. Dynamic Island hiển thị linh động các cảnh báo và Hoạt Động Trực Tiếp. Đồng thời, với màn hình Luôn Bật, Màn Hình Khóa của bạn luôn hiển thị, nên bạn thậm chí không cần chạm vào màn hình để cập nhật thông tin.</li>\n<li>CHIP A17 PRO THAY ĐỔI CUỘC CHƠI — GPU đẳng cấp Pro đem tới đồ họa mượt mà hơn cùng ánh sáng chân thực dành cho môi trường có độ chi tiết cao. CPU nhanh hơn xử lý những khối lượng công việc phức tạp và các ứng dụng kinh doanh một cách dễ dàng. A17 Pro có khả năng tiết kiệm năng lượng ấn tượng, mang đến thời lượng pin cả ngày tuyệt vời, giúp bạn thoải mái dùng cho công việc khi đang di chuyển.<sup>3</sup></li>\n<li>HỆ THỐNG CAMERA PRO MẠNH MẼ — Sở hữu khung hình linh hoạt đáng kinh ngạc với 7 ống kính chuyên nghiệp. Chụp ảnh có độ phân giải siêu cao với nhiều màu sắc và chi tiết hơn bằng camera Chính 48MP. Và chụp ảnh cận cảnh sắc nét hơn từ khoảng cách xa hơn với camera Telephoto 5x trên iPhone 15 Pro Max.</li>\n<li>NÚT TÁC VỤ CÓ THỂ TÙY CHỈNH — Nút Tác Vụ là cách nhanh chóng đến tính năng yêu thích của bạn. Chỉ cần đặt thành một tác vụ bạn muốn, chẳng hạn chế độ Im Lặng, Camera, Ghi Âm hoặc Phím Tắt và nhiều tác vụ khác. Sau đó nhấn và giữ để khởi chạy tác vụ đó.</li>\n<li>KẾT NỐI PRO — Cổng kết nối USB-C mới cho phép bạn sạc máy Mac hoặc iPad bằng cùng cáp sạc với iPhone 15 Pro Max. Với USB 3, bạn sẽ thấy bước nhảy vọt về tốc độ truyền dữ liệu.<sup>4</sup> Và bạn có thể tải xuống tập tin nhanh hơn đến 2x bằng Wi-Fi 6E.<sup>5</sup></li>\n<li>CÁC TÍNH NĂNG AN TOÀN QUAN TRỌNG — Với tính năng Phát Hiện Va Chạm, iPhone có thể phát hiện va chạm ô tô nghiêm trọng và gọi trợ giúp khi cần kíp.<sup>6</sup></li>\n<li>ĐƯỢC THIẾT KẾ ĐỂ TẠO NÊN KHÁC BIỆT — iPhone trang bị các biện pháp bảo vệ quyền riêng tư, cho bạn quyền kiểm soát dữ liệu của mình. iPhone được làm từ nhiều vật liệu tái chế hơn để giảm thiểu tác động tới môi trường. Và được tích hợp những tính năng giúp iPhone dễ sử dụng hơn cho tất cả mọi người.</li>\n<li>ĐI KÈM VỚI BẢO HÀNH APPLECARE — Mỗi iPhone đều được bảo hành giới hạn trong một năm và hỗ trợ kỹ thuật miễn phí trong tối đa 90 ngày. Mua AppleCare+ để kéo dài thời hạn bảo hành.</li></ul><h3>Pháp lý</h3><p><sup>1</sup>iPhone 15, iPhone 15 Plus, iPhone 15 Pro và iPhone 15 Pro Max có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.&nbsp;</p><p><sup>2</sup>Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật chuẩn, kích thước màn hình theo đường chéo là 6,12 inch (iPhone&nbsp;15&nbsp;Pro, iPhone&nbsp;15) hoặc 6,69 inch (iPhone&nbsp;15&nbsp;Pro&nbsp;Max, iPhone&nbsp;15&nbsp;Plus). Diện tích hiển thị thực tế nhỏ hơn.</p><p><sup>3</sup>Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình; truy cập  để biết thêm thông tin.</p><p><sup>4</sup>Yêu cầu cáp USB 3 với tốc độ 10Gb/s để đạt tốc độ truyền nhanh hơn đến 20x trên các phiên bản iPhone 15 Pro.</p><p><sup>5</sup>Wi-Fi 6E khả dụng tại các quốc gia và khu vực có hỗ trợ.</p><p><sup>6</sup>iPhone 15 và iPhone 15 Pro có thể phát hiện va chạm ô tô nghiêm trọng và gọi trợ giúp. Yêu cầu kết nối mạng di động hoặc Cuộc Gọi Wi-Fi.</p><p>&nbsp;</p><h3>Thông số kỹ thuật</h3><p>Truy cập  để xem cấu hình đầy đủ.</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>',
    status: false,
    averageRating: 4,
    numberOfReviews: 112,
    numberOfPurchases: 672,
    storeDto: {
      id: 1,
      name: "Apple",
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    },
    brandDto: {
      id: 1,
      name: "Apple",
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    },
    relatedProducts: [
      {
        id: 1,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro Max",
        averageRating: 4,
        price: 29650000,
      },
      {
        id: 11,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro Max",
        averageRating: 4,
        price: 29990000,
      },
      {
        id: 12,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro Max",
        averageRating: 4,
        price: 29890000,
      },
      {
        id: 2,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
        name: "Iphone 15 Pro",
        averageRating: 5,
        price: 26990000,
      },
      {
        id: 3,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
        name: "Iphone 15 Plus",
        averageRating: 4,
        price: 23990000,
      },
      {
        id: 4,
        slug: "",
        image:
          "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
        name: "Iphone 15",
        averageRating: 4,
        price: 20690000,
      },
    ],
    productAttributes: [
      {
        id: 1,
        name: "Màu sắc",
        productAttributeValues: [
          {
            id: 1,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/5e/8e/5a/ffd57c334ad997d311d311be41ef6aa8.png.webp",
            value: "Titan Trắng",
            attributeId: 1,
          },
          {
            id: 3,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/99/86/04/0dc97405d243042a84b2c96768fe0e38.png.webp",
            value: "Titan Xanh",
            attributeId: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Dung lượng",
        productAttributeValues: [
          {
            id: 4,
            image: "",
            value: "256GB",
            attributeId: 2,
          },
        ],
      },
    ],
    productVariants: [
      {
        id: 1,
        quantity: 11,
        price: 30990000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        productImages: [
          {
            id: 2,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1.jpg",
          },
          {
            id: 3,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-2-1.jpg",
          },
          {
            id: 4,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-3-1.jpg",
          },
          {
            id: 5,
            url: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-4-1.jpg",
          },
        ],
        productAttributeValues: [
          {
            id: 3,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/99/86/04/0dc97405d243042a84b2c96768fe0e38.png.webp",
            value: "Titan Xanh",
            attributeId: 1,
          },
          {
            id: 4,
            image: "",
            value: "256GB",
            attributeId: 2,
          },
        ],
      },
      {
        id: 2,
        quantity: 10,
        price: 29990000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
        productImages: [
          {
            id: 2,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-1.jpg",
          },
          {
            id: 3,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-2.jpg",
          },
          {
            id: 4,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-3.jpg",
          },
          {
            id: 5,
            url: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-4.jpg",
          },
        ],
        productAttributeValues: [
          {
            id: 1,
            image:
              "https://salt.tikicdn.com/cache/750x750/ts/product/5e/8e/5a/ffd57c334ad997d311d311be41ef6aa8.png.webp",
            value: "Titan Trắng",
            attributeId: 1,
          },
          {
            id: 4,
            image: "",
            value: "256GB",
            attributeId: 2,
          },
        ],
      },
    ],
  })
);

app.listen(8080, () => console.log("Server ready on port 8080."));
module.exports = app;

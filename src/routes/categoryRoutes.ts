import express, { Request, Response } from 'express'
const router = express.Router()

router.route('/').get((req: Request, res: Response) =>
  res.status(200).json([
    {
      id: 1,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp',
      parent: 'Đồ Chơi - Mẹ & Bé',
      children: [
        'Thời Trang Cho Mẹ Và Bé',
        'Đồ chơi',
        'Đồ dùng cho bé',
        'Chăm sóc nhà cửa',
        'Chăm sóc mẹ mang thai, sau sinh',
        'Dinh dưỡng cho bé',
        'Tã, Bỉm',
        'Dinh dưỡng cho người lớn',
        'Dinh dưỡng cho mẹ',
        'Thực phẩm ăn dặm',
        'Chuẩn bị mang thai'
      ]
    },
    {
      id: 2,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp',
      parent: 'Thực Phẩm Tươi Sống',
      children: [
        'Trái Cây',
        'Thịt, Trứng',
        'Cá, thuỷ hải sản',
        'Rau củ quả',
        'Thực phẩm Việt',
        'Sữa, bơ, phô mai',
        'Đông lạnh, mát',
        'Dầu ăn, gia vị',
        'Gạo, mì, nông sản',
        'Đồ hộp, đóng gói',
        'Bia, đồ uống',
        'Thực phẩm chay',
        'Dành cho trẻ em',
        'Bánh kẹo, giỏ quà',
        'Thức ăn, đồ thú cưng',
        'Chăm sóc cá nhân',
        'Chăm sóc nhà cửa'
      ]
    },
    {
      id: 3,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp',
      parent: 'Điện Thoại - Máy Tính Bảng',
      children: ['Điện thoại Smartphone', 'Điện thoại bàn', 'Điện thoại phổ thông', 'Máy đọc sách', 'Máy tính bảng']
    },
    {
      id: 4,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp',
      parent: 'Làm Đẹp - Sức Khỏe',
      children: [
        'Chăm sóc da mặt',
        'Dụng cụ làm đẹp',
        'Thực phẩm chức năng',
        'Trang điểm',
        'Chăm sóc cơ thể',
        'Máy Massage & Thiết bị chăm sóc sức khỏe',
        'Sản phẩm thiên nhiên & Khác',
        'Chăm sóc tóc và da đầu',
        'Chăm sóc cá nhân',
        'Nước hoa',
        'Hỗ trợ tình dục',
        'Bộ sản phẩm làm đẹp',
        'Dược mỹ phẩm'
      ]
    },
    {
      id: 5,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp',
      parent: 'Điện Gia Dụng',
      children: ['Đồ dùng nhà bếp', 'Thiết bị gia đình']
    },
    {
      id: 6,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp',
      parent: 'Thời trang nữ',
      children: [
        'Áo nữ',
        'Đầm nữ',
        'Quần nữ',
        'Áo liền quần - Bộ trang phục',
        'Áo khoác nữ',
        'Đồ ngủ - Đồ mặc nhà nữ',
        'Chân váy',
        'Trang phục bơi nữ',
        'Thời trang bầu và sau sinh',
        'Thời trang trung niên'
      ]
    },
    {
      id: 7,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp',
      parent: 'Thời trang nam',
      children: [
        'Áo thun nam',
        'Quần nam',
        'Áo vest - Áo khoác nam',
        'Áo sơ mi nam',
        'Đồ lót nam',
        'Áo hoodie nam',
        'Đồ ngủ, đồ mặc nhà nam',
        'Đồ đôi - Đồ gia đình nam',
        'Áo nỉ - Áo len nam',
        'Đồ bơi - Đồ đi biển nam',
        'Quần áo nam trung niên',
        'Quần áo nam kích cỡ lớn'
      ]
    },
    {
      id: 8,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp',
      parent: 'Giày - Dép nữ',
      children: [
        'Giày cao gót',
        'Dép - Guốc nữ',
        'Giày thể thao nữ',
        'Giày sandals nữ',
        'Giày búp bê',
        'Giày boots nữ',
        'Giày lười nữ',
        'Phụ kiện giày',
        'Giày Đế xuồng nữ'
      ]
    },
    {
      id: 9,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp',
      parent: 'Giày - Dép nam',
      children: [
        'Giày lười nam',
        'Giày tây nam',
        'Giày thể thao nam',
        'Dép nam',
        'Giày sandals nam',
        'Phụ kiện giày nam',
        'Giày boots nam'
      ]
    },
    {
      id: 10,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp',
      parent: 'Túi thời trang nữ',
      children: ['Túi đeo chéo, túi đeo vai nữ', 'Ví nữ', 'Túi xách tay nữ', 'Túi tote nữ', 'Phụ kiện túi']
    },
    {
      id: 11,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp',
      parent: 'Túi thời trang nam',
      children: ['Ví nam', 'Túi đeo chéo nam', 'Túi xách công sở nam', 'Túi bao tử, túi đeo bụng']
    },
    {
      id: 12,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp',
      parent: 'Balo và Vali',
      children: ['Balo', 'Túi du lịch và phụ kiện', 'Balo, cặp, túi chống sốc laptop', 'Vali, phụ kiện vali']
    },
    {
      id: 13,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp',
      parent: 'Phụ kiện thời trang',
      children: ['Phụ kiện thời trang nữ', 'Mắt kính', 'Phụ kiện thời trang nam']
    },
    {
      id: 14,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp',
      parent: 'Đồng hồ và Trang sức',
      children: ['Trang sức', 'Đồng hồ nữ', 'Đồng hồ nam', 'Phụ kiện đồng hồ', 'Đồng hồ trẻ em']
    },
    {
      id: 15,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp',
      parent: 'Laptop - Máy Vi Tính - Linh kiện',
      children: [
        'Linh Kiện Máy Tính - Phụ Kiện Máy Tính',
        'Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi',
        'Thiết Bị Mạng',
        'Thiết Bị Lưu Trữ',
        'PC - Máy Tính Bộ',
        'Laptop'
      ]
    },
    {
      id: 16,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp',
      parent: 'Nhà Cửa - Đời Sống',
      children: [
        'Trang trí nhà cửa',
        'Dụng cụ nhà bếp',
        'Sửa chữa nhà cửa',
        'Ngoài trời & sân vườn',
        'Nội thất',
        'Đèn & thiết bị chiếu sáng',
        'Đồ dùng và thiết bị nhà tắm',
        'Đồ dùng phòng ăn',
        'Đồ dùng phòng ngủ',
        'Đồ thờ cúng',
        'Nhạc cụ',
        'Hoa tươi và cây cảnh'
      ]
    },
    {
      id: 17,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp',
      parent: 'Bách Hóa Online',
      children: [
        'Chăm sóc thú cưng',
        'Đồ uống - Pha chế dạng bột',
        'Thực phẩm Đóng hộp và Khô',
        'Gia Vị và Chế Biến',
        'Đậu & Hạt Các Loại',
        'Đồ Ăn Vặt',
        'Sữa và các Sản phẩm từ sữa',
        'Đồ Uống Không Cồn',
        'Đồ uống có cồn',
        'Bộ quà tặng'
      ]
    },
    {
      id: 18,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp',
      parent: 'Hàng Quốc Tế',
      children: [
        'Nhà Cửa - Đời Sống',
        'Thời Trang',
        'Ô tô, xe máy, xe đạp',
        'Thiết Bị Số - Phụ Kiện Số',
        'Thể thao - Dã ngoại',
        'Làm Đẹp - Sức Khỏe',
        'Sách, Văn phòng phẩm & Quà lưu niệm',
        'Mẹ & Bé',
        'Điện gia dụng',
        'Bách hóa online',
        'Máy Ảnh - Máy Quay Phim',
        'Laptop & Máy Vi Tính',
        'Sản phẩm - thiết bị công nghiệp',
        'Tivi & Thiết Bị Nghe Nhìn',
        'Điện Thoại - Máy Tính Bảng'
      ]
    },
    {
      id: 19,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png.webp',
      parent: 'Thiết Bị Số - Phụ Kiện Số',
      children: [
        'Phụ Kiện Điện Thoại và Máy Tính Bảng',
        'Phụ kiện máy tính và Laptop',
        'Thiết Bị Âm Thanh và Phụ Kiện',
        'Thiết Bị Thông Minh và Linh Kiện Điện Tử',
        'Thiết Bị Đeo Thông Minh và Phụ Kiện',
        'Thiết Bị Chơi Game và Phụ Kiện'
      ]
    },
    {
      id: 20,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp',
      parent: 'Voucher - Dịch vụ',
      children: [
        'Thanh toán hóa đơn',
        'Khóa học',
        'Du lịch - Khách sạn',
        'Spa & Làm đẹp',
        'Dịch vụ khác',
        'Nhà hàng - Ăn uống',
        'Sự kiện - Giải trí',
        'Nha khoa - Sức khỏe',
        'Phiếu quà tặng',
        'Sim số - Thẻ cào - Thẻ game'
      ]
    },
    {
      id: 21,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp',
      parent: 'Ô Tô - Xe Máy - Xe Đạp',
      children: ['Phụ kiện - Chăm sóc xe', 'Xe điện', 'Xe đạp', 'Xe máy', 'Ô tô', 'Xe Scooter', 'Dịch vụ, lắp đặt']
    },
    {
      id: 22,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp',
      parent: 'Nhà Sách Tiki',
      children: ['Sách tiếng Việt', 'Văn phòng phẩm', 'Quà lưu niệm', 'English Books']
    },
    {
      id: 23,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp',
      parent: 'Điện Tử - Điện Lạnh',
      children: [
        'Âm thanh & Phụ kiện Tivi',
        'Phụ kiện điện lạnh',
        'Tủ lạnh',
        'Máy lạnh - Máy điều hòa',
        'Máy giặt',
        'Tủ đông - Tủ mát',
        'Tivi',
        'Máy nước nóng',
        'Máy rửa chén',
        'Máy sấy quần áo',
        'Tủ ướp rượu'
      ]
    },
    {
      id: 24,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp',
      parent: 'Thể Thao - Dã Ngoại',
      children: [
        'Trang phục thể thao nữ',
        'Trang phục thể thao nam',
        'Đồ dùng dã ngoại',
        'Giày thể thao nam',
        'Phụ kiện thể thao',
        'Dụng cụ - thiết bị tập thể thao',
        'Các môn thể thao khác',
        'Dụng cụ câu cá',
        'Thể thao dưới nước',
        'Các môn thể thao đồng đội',
        'Các môn thể thao chơi vợt',
        'Các môn thể thao đối kháng',
        'Giày thể thao nữ',
        'Thực phẩm bổ sung năng lượng',
        'Dụng cụ leo núi'
      ]
    },
    {
      id: 25,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp',
      parent: 'Máy Ảnh - Máy Quay Phim',
      children: [
        'Phụ Kiện Máy Ảnh, Máy Quay',
        'Camera Giám Sát',
        'Thiết Bị Ánh Sáng',
        'Camera Hành Trình - Action Camera và Phụ Kiện',
        'Balo - Túi Đựng - Bao Da',
        'Ống Kính - Ống Ngắm',
        'Ống Kính (Lens)',
        'Thiết Bị Quay Phim',
        'Máy Bay Camera và Phụ Kiện',
        'Máy Ảnh'
      ]
    },
    {
      id: 26,
      imageUrl: 'https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp',
      parent: 'Từ Khóa Được Quan Tâm',
      children: [
        'máy sưởi',
        'đèn sưởi',
        'quạt tích điện sunhouse',
        'máy sấy tóc philips',
        'bàn ủi hơi nước đứng',
        'bàn là hơi nước philip',
        'may sưởi xiaomi',
        'bình nươc nóng ariston',
        'máy sưởi xiaomi',
        'máy hút bụi giường nệm',
        'cây nước nóng lạnh toshiba',
        'robot hút bụi lau nhà của nhật',
        'đèn sưởi âm trần',
        'nồi cơm điện tefal'
      ]
    }
  ])
)

export default router

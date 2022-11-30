<template>
    <nav class="header navbar navbar-expand position-fixed">
        <ul class="navbar-nav">

            <router-link :to="{ name: 'books' }" >
                <li class="nav-item">
                    <a href="#" class="navbar-brand">TRANG CHỦ</a>
                </li>
            </router-link>
            <router-link :to="{ name: 'book.add' }" >
                <li class="nav-item">
                    <a href="#" class="navbar-brand">THÊM MỚI</a>
                </li>
            </router-link>
            <li class="nav-item" style="margin-left: 700px;">
                <router-link :to="{ name: 'user' }" class="navbar-brand">
                    ĐĂNG XUẤT
                </router-link>
            </li>
        </ul>
    </nav>
</template>

import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './Header.module.css';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { Icon } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	//avatars
	smallAvatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	orangeAvatar: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
}));

const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px #3f51b5`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))(Badge);

export default function Header(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	//Выйти из системы
	const onLogout = () => {
		props.logout();
		//if (!props.userId) props.history.push("/profile"); //редирект на страницу авторизации
	}

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}><a href="http://localhost:3000/profile" className={styles.noneHref}>Профиль</a></MenuItem>
			<MenuItem onClick={handleMenuClose}><a href="http://localhost:3000/settings" className={styles.noneHref}>Настройки</a></MenuItem>
			{/* <MenuItem onClick={onLogout}><a href="" className={styles.noneHref}>Выйти</a></MenuItem> */}
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 0 new mails" color="inherit">
					<Badge badgeContent={0} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Сообщения</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 0 new notifications" color="inherit">
					<Badge badgeContent={0} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Уведомления</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Профиль</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow + " " + styles.header}>
			<AppBar position="static">
				<Toolbar>
					{/* <IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton> */}
					<Typography className={classes.title} variant="h6" noWrap>
						<a href="http://localhost:3000/profile" className={styles.logoText}>AntiVK</a>
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Поиск..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>

					<div className={classes.grow} />

					<div>
						{props.isAuth
							? <div>
								<div className={classes.sectionDesktop}>
									<IconButton aria-label="show 2 new mails" color="inherit">
										<Badge badgeContent={0} color="secondary">
											<MailIcon />
										</Badge>
									</IconButton>
									<IconButton aria-label="show 1 new notifications" color="inherit">
										<Badge badgeContent={0} color="secondary">
											<NotificationsIcon />
										</Badge>
									</IconButton>
									<IconButton
										edge="end"
										aria-label="account of current user"
										aria-controls={menuId}
										aria-haspopup="true"
										onClick={handleProfileMenuOpen}
										color="inherit"
									>
										{props.profile &&
											<span className={styles.loginName}>{props.login}</span>
										}
										<div>
											{!props.avaPhoto && <Avatar>VA</Avatar>}
											{props.avaPhoto &&
												<StyledBadge
													overlap="circle"
													anchorOrigin={{
														vertical: 'bottom',
														horizontal: 'right',
													}}
													variant="dot"
												>
													<Avatar alt="avatar" src={props.avaPhoto} />
												</StyledBadge>
											}
										</div>
									</IconButton>
									<IconButton color="default" aria-label="upload picture" component="span" onClick={onLogout}>
										<ExitToAppIcon />
									</IconButton>
								</div>
								<div className={classes.sectionMobile}>
									<IconButton
										aria-label="show more"
										aria-controls={mobileMenuId}
										aria-haspopup="true"
										onClick={handleMobileMenuOpen}
										color="inherit"
									>
										<MoreIcon />
									</IconButton>
								</div>
							</div>
							: <Button variant="contained" href="/login">Авторизация</Button>
						}
					</div>

				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
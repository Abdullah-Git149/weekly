import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = process.env.REACT_APP_APIURL

const userToken = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
const profileData = JSON.parse(localStorage.getItem('profile')) ? JSON.parse(localStorage.getItem('profile')) : []

const initialState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    token: userToken,
    user_id: null,
    // profile: profileData,
    allusers: null,
    allbusiness: null,
    cards: null,
    TcPp: null,
    totalCoupons: null,
    redemeemedCoupons: null,
    presentedCoupons: null
}



export const signinUser = createAsyncThunk('auth/login', async (bodyData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`/auth/login`, bodyData)

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const signUpUser = createAsyncThunk('auth/login', async (bodyData, { rejectWithValue }) => {
    try {

        console.log(bodyData)

        const response = await axios.post(`/auth/signUp`, bodyData)
        console.log(response)
        // return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const userProfile = createAsyncThunk('admin/profile', async (bodyData = null, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.get(`admin/profile`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const editProfile = createAsyncThunk('user/editProfile', async (formData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                'Accept': 'application/json',
                "Authorization": token,
                'Content-Type': 'multipart/form-data',
            }
        }
        const response = await axios.post(`user/editProfile`, formData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const addLocation = createAsyncThunk('business/addLocation', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`business/addLocation`, bodyData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const addCard = createAsyncThunk('business/addCard', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`business/addCard`, bodyData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getAllUsers = createAsyncThunk('admin/getAllUsers', async (bodyData = null, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.get(`admin/getAllUsers`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getAllBusiness = createAsyncThunk('admin/getAllBusiness', async (bodyData = null, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.get(`admin/getAllBusiness`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const deleteAccount = createAsyncThunk('admin/deleteAccount', async (id, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.delete(`admin/deleteAccount/${id}`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const blockUnblock = createAsyncThunk('admin/blockunblock', async (id, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.get(`admin/blockunblock/${id}`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updatePassword = createAsyncThunk('admin/changepassword', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`admin/changepassword`, bodyData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateTcpp = createAsyncThunk('admin/TcPp', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`admin/TcPp`, bodyData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const forgetPass = createAsyncThunk('user/forgetpassword', async (bodyData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`user/forgetpassword`, bodyData)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const resendCode = createAsyncThunk('user/resendotp', async (bodyData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`user/resendotp`, bodyData)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const verifyAccount = createAsyncThunk('user/verifyAccount', async (bodyData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`user/verifyAccount`, bodyData)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const newpassword = createAsyncThunk('user/newpassword', async (bodyData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`user/newpassword`, bodyData)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const userLogout = createAsyncThunk('vendor/log-out', async (bodyData = null, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));


        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`vendor/log-out`, false, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const getAllCards = createAsyncThunk('business/allCards', async (bodyData = null, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.get(`business/allCards`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const setCardDefault = createAsyncThunk('business/setCardDefault', async (id, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`business/setCardDefault/${id}`, false, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const deleteCard = createAsyncThunk('business/deletecard', async (id, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.delete(`business/deletecard/${id}`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const TcPp = createAsyncThunk('getTcPp', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`getTcPp`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const getTotalCouponChart = createAsyncThunk('business/getTotalCouponChart', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`business/getTotalCouponChart`, bodyData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const getRedeemedCouponChart = createAsyncThunk('business/getRedeemedCouponChart', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.post(`business/getRedeemedCouponChart`, bodyData, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const getPresentedCouponChart = createAsyncThunk('business/getPresentedCouponChart', async (bodyData, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        let config = {
            headers: {
                "Authorization": token,
            }
        }
        const response = await axios.get(`business/getPresentedCouponChart`, config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


const userSlice = createSlice({
    name: 'Business',
    initialState,
    reducers: {
        token: (state) => {
            const user = JSON.parse(localStorage.getItem('profile'));
            if (user) {
                state.token = user?.token
                state.profile = user
            }
        }
    },
    extraReducers(builder) {
        builder

            .addCase(signinUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(signinUser.fulfilled, (state, action) => {
                state.status = 'succeeded'

                console.log(action.payload.data.token, "payload")

                console.log("hello", action.payload.message)
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                localStorage.setItem("user", JSON.stringify(action.payload.data.token));
                state.token = action.payload.data.token
                state.error = null
            })
            .addCase(signinUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(userProfile.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                state.status = 'succeeded'
                localStorage.setItem("profile", JSON.stringify(action.payload.user));
                const user = JSON.parse(localStorage.getItem('profile'));
                state.profile = user
                state.token = action.payload.user.token
                state.error = null
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })




            .addCase(editProfile.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(updatePassword.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(addLocation.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addLocation.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(addLocation.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(addCard.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addCard.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(addCard.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(getAllUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.allusers = action.payload.users
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })


            .addCase(getAllBusiness.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getAllBusiness.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.allbusiness = action.payload.Business

            })
            .addCase(getAllBusiness.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })


            .addCase(deleteAccount.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteAccount.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(deleteAccount.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(blockUnblock.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(blockUnblock.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(blockUnblock.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })


            .addCase(forgetPass.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(forgetPass.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.user_id = action.payload.user_id
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(forgetPass.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(resendCode.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(resendCode.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(resendCode.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })




            .addCase(verifyAccount.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(verifyAccount.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(verifyAccount.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })



            .addCase(newpassword.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(newpassword.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(newpassword.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })




            .addCase(userLogout.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                state.status = 'succeeded'
                localStorage.clear();
                state.profile = []
                state.token = null
            })
            .addCase(userLogout.rejected, (state, action) => {
                toast.error(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                state.status = 'failed'
                state.error = action.payload.message
            })


            .addCase(getAllCards.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getAllCards.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cards = action.payload.cards

            })
            .addCase(getAllCards.rejected, (state, action) => {
                state.cards = null
                state.status = 'failed'
                state.error = action.payload.message
            })



            .addCase(setCardDefault.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(setCardDefault.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(setCardDefault.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })



            .addCase(deleteCard.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteCard.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(deleteCard.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })


            .addCase(TcPp.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(TcPp.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.TcPp = action.payload.tcAndPp
            })
            .addCase(TcPp.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })

            .addCase(updateTcpp.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateTcpp.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.TcPp = action.payload.tcAndPp
                toast.success(action.payload.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .addCase(updateTcpp.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })


            .addCase(getTotalCouponChart.pending, (state, action) => {
                // state.status = 'loading'
                state.error = null
            })
            .addCase(getTotalCouponChart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.totalCoupons = action.payload
            })
            .addCase(getTotalCouponChart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })



            .addCase(getRedeemedCouponChart.pending, (state, action) => {
                // state.status = 'loading'
                state.error = null
            })
            .addCase(getRedeemedCouponChart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.redemeemedCoupons = action.payload
            })
            .addCase(getRedeemedCouponChart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })



            .addCase(getPresentedCouponChart.pending, (state, action) => {
                // state.status = 'loading'
                state.error = null
            })
            .addCase(getPresentedCouponChart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.presentedCoupons = action.payload
            })
            .addCase(getPresentedCouponChart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.message
            })
    }
})


export const getUserToken = (state) => state.users.token;


export default userSlice.reducer
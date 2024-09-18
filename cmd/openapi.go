package cmd

import (
	"github.com/cloudwego/hertz/pkg/app/server"
	"github.com/spf13/cobra"
	"server/bootstrap"
	"server/common"
	"server/openapi"
)

var OpenAPI = &cobra.Command{
	Use:   "openapi",
	Short: "Start Open API service",
	RunE: func(cmd *cobra.Command, args []string) (err error) {
		ctx := cmd.Context()
		values := ctx.Value("values").(*common.Values)
		if values.Address == "" {
			values.Address = ":9000"
		}

		var x *openapi.API
		if x, err = bootstrap.NewOpenAPI(values); err != nil {
			return
		}
		var h *server.Hertz
		if h, err = x.Initialize(ctx); err != nil {
			return
		}
		if err = x.Routes(h); err != nil {
			return
		}
		h.Spin()
		return
	},
}
